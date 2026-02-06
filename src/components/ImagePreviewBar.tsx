"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { usePreview } from "@/lib/images/preview-context";

// Only render in development
const isProduction = process.env.NODE_ENV === "production";

// Map slots to their page URLs for auto-navigation
const slotToPageUrl: Record<string, string> = {
  // Homepage slots
  "hero": "/",
  "industries-healthcare": "/",
  "industries-it": "/",
  "industries-saas": "/",
  "why-us": "/",
  "case-studies-generic": "/",
  "case-study-healthcare": "/",
  "case-study-saas": "/",
  "case-study-crm": "/",
  "case-study-healthcare-v3": "/",
  "case-study-saas-v3": "/",
  "case-study-crm-v3": "/",
  "services-accent": "/",
  "stats-background": "/",

  // Service page slots
  "service-crm-onboarding": "/services/hubspot-onboarding",
  "service-crm-migration": "/services/crm-migration",
  "service-marketing-automation": "/services/marketing-automation",
  "service-sales-enablement": "/services/sales-enablement",
  "service-reporting": "/services/reporting",
  "service-ai-automation": "/services/ai-automation",
  "service-integrations": "/services/integrations",
  "service-development": "/services/development",
  "service-marketing": "/services/marketing",

  // Industry page slots (v2 versions used on dedicated pages)
  "industries-healthcare-v2": "/industries/healthcare",
  "industries-it-v2": "/industries/information-technology",
  "industries-saas-v2": "/industries/saas",
};

// Session storage key for pending slot after navigation
const PENDING_SLOT_KEY = "preview-pending-slot";

// Map slots to page section selectors for auto-scroll
const slotToSectionMap: Record<string, string> = {
  "hero": "section:first-of-type",
  "industries-healthcare": "#industries",
  "industries-it": "#industries",
  "industries-saas": "#industries",
  "case-studies-generic": "#work",
  "case-study-healthcare": "#work",
  "case-study-saas": "#work",
  "case-study-crm": "#work",
  "why-us": "section:has(.text-teal-500:contains('Why Media Garcia'))",
  "services-accent": "#services",
  "stats-background": "section:has(.text-4xl)",
};

// Scroll to section for a given slot
function scrollToSlotSection(slot: string) {
  // Try direct mapping first
  let selector = slotToSectionMap[slot];

  // Fallback: try to find section by slot name patterns
  if (!selector) {
    if (slot.startsWith("industries")) {
      selector = "#industries";
    } else if (slot.startsWith("case-stud")) {
      selector = "#work";
    } else if (slot.includes("hero")) {
      selector = "section:first-of-type";
    }
  }

  if (selector) {
    try {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    } catch {
      // Selector might be invalid, try fallback
    }
  }

  // Fallback: scroll to top for hero, or try to find by text content
  if (slot.includes("hero")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function ImagePreviewBar() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    isPreviewMode,
    setPreviewMode,
    manifest,
    isLoading,
    currentSlot,
    setCurrentSlot,
    cycleVariant,
    getSlotVariantInfo,
    getSlotPrompt,
    getCurrentFilename,
    selectCurrentVariant,
    deleteCurrentVariant,
    regenerateSlot,
    refreshManifest,
  } = usePreview();

  const [isSelecting, setIsSelecting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemixInput, setShowRemixInput] = useState(false);
  const [remixPrompt, setRemixPrompt] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Get available slots from manifest
  const availableSlots = manifest ? Object.keys(manifest.slots).filter(
    (slot) => manifest.slots[slot].files.length > 0
  ) : [];

  // Check for pending slot from navigation on mount
  useEffect(() => {
    if (isPreviewMode && availableSlots.length > 0) {
      const pendingSlot = sessionStorage.getItem(PENDING_SLOT_KEY);
      if (pendingSlot && availableSlots.includes(pendingSlot)) {
        setCurrentSlot(pendingSlot);
        sessionStorage.removeItem(PENDING_SLOT_KEY);
        // Auto-scroll after setting slot
        setTimeout(() => scrollToSlotSection(pendingSlot), 200);
      }
    }
  }, [isPreviewMode, availableSlots, setCurrentSlot]);

  // Set first slot as default when manifest loads
  useEffect(() => {
    if (availableSlots.length > 0 && !currentSlot) {
      setCurrentSlot(availableSlots[0]);
    }
  }, [availableSlots, currentSlot, setCurrentSlot]);

  // Navigate to a slot, handling cross-page navigation
  const navigateToSlot = useCallback((newSlot: string) => {
    const targetUrl = slotToPageUrl[newSlot];
    const currentUrl = pathname;

    // Check if we need to navigate to a different page
    if (targetUrl && targetUrl !== currentUrl) {
      // Store pending slot for after navigation
      sessionStorage.setItem(PENDING_SLOT_KEY, newSlot);
      // Navigate with preview param
      router.push(`${targetUrl}?preview=1`);
    } else {
      // Same page, just switch slot
      setCurrentSlot(newSlot);
      setTimeout(() => scrollToSlotSection(newSlot), 100);
    }
  }, [pathname, router, setCurrentSlot]);

  // Cycle through slots (for up/down navigation)
  const cycleSlot = useCallback((direction: "prev" | "next") => {
    if (availableSlots.length === 0) return;

    const currentIndex = currentSlot ? availableSlots.indexOf(currentSlot) : -1;
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex < availableSlots.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : availableSlots.length - 1;
    }

    const newSlot = availableSlots[newIndex];
    // Use navigateToSlot for cross-page navigation support
    navigateToSlot(newSlot);
  }, [availableSlots, currentSlot, navigateToSlot]);

  // Keyboard shortcuts
  useEffect(() => {
    if (isProduction || !isPreviewMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if typing in an input or select
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return;
      }

      // Left/Right: cycle through variants
      if (currentSlot) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          cycleVariant(currentSlot, "prev");
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          cycleVariant(currentSlot, "next");
        } else if (e.key === "Enter") {
          e.preventDefault();
          handleSelect();
        }
      }

      // Up/Down: cycle through slots
      if (e.key === "ArrowUp") {
        e.preventDefault();
        cycleSlot("prev");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        cycleSlot("next");
      }

      // Escape to close modals first, then preview mode
      if (e.key === "Escape") {
        if (showDeleteConfirm) {
          setShowDeleteConfirm(false);
        } else if (showRemixInput) {
          setShowRemixInput(false);
          setRemixPrompt("");
        } else {
          setPreviewMode(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewMode, currentSlot, cycleVariant, cycleSlot, setPreviewMode, showRemixInput, showDeleteConfirm]);

  const handleSelect = useCallback(async () => {
    if (!currentSlot || isSelecting) return;

    setIsSelecting(true);
    const success = await selectCurrentVariant(currentSlot);
    setIsSelecting(false);

    if (success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  }, [currentSlot, isSelecting, selectCurrentVariant]);

  const handleDeleteClick = useCallback(() => {
    if (!currentSlot || isDeleting) return;
    setShowDeleteConfirm(true);
  }, [currentSlot, isDeleting]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!currentSlot || isDeleting) return;

    setShowDeleteConfirm(false);
    setIsDeleting(true);
    await deleteCurrentVariant(currentSlot);
    setIsDeleting(false);
  }, [currentSlot, isDeleting, deleteCurrentVariant]);

  const handleRegenerate = useCallback(async () => {
    if (!currentSlot || isRegenerating) return;

    setIsRegenerating(true);
    await regenerateSlot(currentSlot);
    setIsRegenerating(false);
  }, [currentSlot, isRegenerating, regenerateSlot]);

  const handleRemix = useCallback(async () => {
    if (!currentSlot || isRegenerating || !remixPrompt.trim()) return;

    setIsRegenerating(true);
    await regenerateSlot(currentSlot, remixPrompt.trim());
    setIsRegenerating(false);
    setShowRemixInput(false);
    setRemixPrompt("");
  }, [currentSlot, isRegenerating, remixPrompt, regenerateSlot]);

  // Initialize remix prompt with current slot's prompt when opening
  const openRemixInput = useCallback(() => {
    if (currentSlot) {
      const existingPrompt = getSlotPrompt(currentSlot);
      setRemixPrompt(existingPrompt ?? "");
    }
    setShowRemixInput(true);
  }, [currentSlot, getSlotPrompt]);

  // Production guard
  if (isProduction) {
    return null;
  }

  // Not in preview mode - show toggle button
  if (!isPreviewMode) {
    return (
      <button
        onClick={() => setPreviewMode(true)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Preview Images
      </button>
    );
  }

  const variantInfo = currentSlot ? getSlotVariantInfo(currentSlot) : null;
  const currentFilename = currentSlot ? getCurrentFilename(currentSlot) : null;
  const selectedFilename = currentSlot && manifest?.slots[currentSlot]?.selected || null;
  const isCurrentSelected = currentFilename === selectedFilename;

  return (
    <>
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/10 rounded-xl p-6 max-w-md mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Delete Image?</h3>
                <p className="text-sm text-white/60">This cannot be undone</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <p className="text-xs text-white/40 mb-1">File to delete:</p>
              <p className="text-sm text-white font-mono truncate">{currentFilename}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm text-white px-4 py-3 shadow-2xl">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* Left - Label and Slot Selector */}
        <div className="flex items-center gap-4">
          <span className="bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded">
            Preview Mode
          </span>

          {isLoading ? (
            <span className="text-white/60 text-sm">Loading...</span>
          ) : availableSlots.length === 0 ? (
            <span className="text-white/60 text-sm">No images generated yet</span>
          ) : (
            <select
              value={currentSlot ?? ""}
              onChange={(e) => {
                const newSlot = e.target.value;
                // Use navigateToSlot for cross-page navigation support
                navigateToSlot(newSlot);
              }}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {availableSlots.map((slot) => (
                <option key={slot} value={slot} className="bg-gray-900">
                  {slot}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Center - Navigation */}
        {currentSlot && variantInfo && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => cycleVariant(currentSlot, "prev")}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Previous (Left Arrow)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">
                {variantInfo.current} of {variantInfo.total}
              </span>
              {selectedFilename && (
                <span className={`text-xs ${isCurrentSelected ? "text-green-400" : "text-white/40"}`}>
                  {isCurrentSelected ? (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Selected
                    </span>
                  ) : (
                    `Selected: #${(manifest?.slots[currentSlot]?.files?.findIndex(f => f.filename === selectedFilename) ?? -1) + 1 || "?"}`
                  )}
                </span>
              )}
            </div>

            <button
              onClick={() => cycleVariant(currentSlot, "next")}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Next (Right Arrow)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          {currentSlot && variantInfo && (
            <>
              {/* Delete current variant */}
              <button
                onClick={handleDeleteClick}
                disabled={isDeleting || variantInfo.total <= 1}
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-red-500/80 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Delete this variant"
              >
                {isDeleting ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>

              {/* Regenerate */}
              <button
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                title="Generate 3 more with same prompt"
              >
                {isRegenerating ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
                +3
              </button>

              {/* Remix */}
              <button
                onClick={openRemixInput}
                disabled={isRegenerating}
                className="px-3 py-1.5 bg-purple-500/80 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Modify prompt and regenerate"
              >
                Remix
              </button>

              <div className="w-px h-6 bg-white/20 mx-1" />

              {/* Select */}
              <button
                onClick={handleSelect}
                disabled={isSelecting}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  showSuccess
                    ? "bg-green-500 text-white"
                    : "bg-teal-500 hover:bg-teal-600 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSelecting ? "Saving..." : showSuccess ? "Selected!" : "Select"}
              </button>
            </>
          )}

          <button
            onClick={refreshManifest}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            title="Refresh manifest"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          <button
            onClick={() => setPreviewMode(false)}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-red-500/80 rounded-full transition-colors"
            title="Close preview (Escape)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Remix input panel */}
      {showRemixInput && (
        <div className="max-w-[1400px] mx-auto mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <label className="block text-xs text-white/60 mb-1.5">Modify prompt and generate 3 new variants:</label>
              <textarea
                value={remixPrompt}
                onChange={(e) => setRemixPrompt(e.target.value)}
                placeholder="Enter modified prompt..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={2}
                autoFocus
              />
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <button
                onClick={handleRemix}
                disabled={isRegenerating || !remixPrompt.trim()}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isRegenerating && (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isRegenerating ? "Generating..." : "Generate"}
              </button>
              <button
                onClick={() => {
                  setShowRemixInput(false);
                  setRemixPrompt("");
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard shortcuts hint */}
      <div className="max-w-[1400px] mx-auto mt-2 flex items-center gap-4 text-xs text-white/40">
        <span>↑ ↓ Switch slot</span>
        <span>← → Cycle variants</span>
        <span>Esc Close</span>
      </div>
    </div>
    </>
  );
}

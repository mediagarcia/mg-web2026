"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageManifest, ImageSlot } from "@/lib/images/types";

export function ImageStagingClient() {
  const [manifest, setManifest] = useState<ImageManifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSlots, setExpandedSlots] = useState<Set<string>>(new Set());
  const [currentIndexes, setCurrentIndexes] = useState<Record<string, number>>({});

  useEffect(() => {
    fetchManifest();
  }, []);

  async function fetchManifest() {
    try {
      const response = await fetch("/api/image-staging");
      if (!response.ok) {
        throw new Error("Failed to fetch manifest");
      }
      const data = await response.json();
      setManifest(data);

      // Initialize current indexes to selected or 0
      const indexes: Record<string, number> = {};
      Object.entries(data.slots).forEach(([key, slot]) => {
        const s = slot as ImageSlot;
        const selectedIndex = s.files.findIndex((f) => f.filename === s.selected);
        indexes[key] = selectedIndex >= 0 ? selectedIndex : 0;
      });
      setCurrentIndexes(indexes);

      // Auto-expand all slots initially
      setExpandedSlots(new Set(Object.keys(data.slots)));
    } catch {
      setError("Failed to load manifest");
    } finally {
      setLoading(false);
    }
  }

  async function selectImage(slot: string, filename: string) {
    try {
      const response = await fetch("/api/image-staging", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, selected: filename }),
      });

      if (!response.ok) {
        throw new Error("Failed to update selection");
      }

      const data = await response.json();
      setManifest(data.manifest);
    } catch {
      setError("Failed to update selection");
    }
  }

  function toggleSlot(slot: string) {
    setExpandedSlots((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(slot)) {
        newSet.delete(slot);
      } else {
        newSet.add(slot);
      }
      return newSet;
    });
  }

  function navigateCarousel(slot: string, direction: "prev" | "next", totalFiles: number) {
    setCurrentIndexes((prev) => {
      const current = prev[slot] ?? 0;
      let newIndex: number;
      if (direction === "prev") {
        newIndex = current === 0 ? totalFiles - 1 : current - 1;
      } else {
        newIndex = current === totalFiles - 1 ? 0 : current + 1;
      }
      return { ...prev, [slot]: newIndex };
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading manifest...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => {
              setError(null);
              setLoading(true);
              fetchManifest();
            }}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const slots = Object.entries(manifest?.slots ?? {});

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Image Staging</h1>
          <p className="text-gray-600">
            Review and select generated images for each slot. Selected images will be used in production.
          </p>
        </div>

        {/* Empty state */}
        {slots.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No images generated yet</h2>
            <p className="text-gray-600 mb-6">Generate images using the CLI to see them here.</p>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-left font-mono text-sm max-w-xl mx-auto">
              <p className="text-gray-500 mb-2"># Generate hero images</p>
              <p>npm run generate-image -- --slot hero --prompt &quot;Modern tech office scene&quot; --count 3</p>
            </div>
          </div>
        )}

        {/* Slot cards */}
        <div className="space-y-6">
          {slots.map(([key, slot]) => {
            const s = slot as ImageSlot;
            const isExpanded = expandedSlots.has(key);
            const currentIndex = currentIndexes[key] ?? 0;
            const currentFile = s.files[currentIndex];

            return (
              <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Slot header */}
                <button
                  onClick={() => toggleSlot(key)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-gray-900">{key}</span>
                    <span className="text-sm text-gray-500">{s.files.length} variants</span>
                    {s.selected && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Selected: {s.selected}
                      </span>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {isExpanded && s.files.length > 0 && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {/* Metadata */}
                    <div className="py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Aspect:</span>
                        <span className="ml-2 font-medium text-gray-900">{s.aspect}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Model:</span>
                        <span className="ml-2 font-medium text-gray-900">{s.model}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Prompt:</span>
                        <span className="ml-2 font-medium text-gray-900 line-clamp-1">{s.prompt}</span>
                      </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                      {/* Image container */}
                      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        {currentFile && (
                          <Image
                            src={currentFile.path}
                            alt={`${key} variant ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        )}

                        {/* Navigation arrows */}
                        {s.files.length > 1 && (
                          <>
                            <button
                              onClick={() => navigateCarousel(key, "prev", s.files.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => navigateCarousel(key, "next", s.files.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        {/* Counter */}
                        <div className="absolute bottom-2 right-2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                          {currentIndex + 1} / {s.files.length}
                        </div>
                      </div>

                      {/* File info and actions */}
                      {currentFile && (
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{currentFile.filename}</p>
                            <p className="text-sm text-gray-500">
                              Generated {new Date(currentFile.generatedAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            {s.selected === currentFile.filename ? (
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg font-medium">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Selected
                              </span>
                            ) : (
                              <button
                                onClick={() => selectImage(key, currentFile.filename)}
                                className="px-4 py-2 bg-gray-900 hover:bg-teal-500 text-white rounded-lg font-medium transition"
                              >
                                Select This
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Thumbnail strip */}
                      {s.files.length > 1 && (
                        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                          {s.files.map((file, index) => (
                            <button
                              key={file.filename}
                              onClick={() => setCurrentIndexes((prev) => ({ ...prev, [key]: index }))}
                              className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                                index === currentIndex
                                  ? "border-teal-500"
                                  : file.filename === s.selected
                                    ? "border-purple-500"
                                    : "border-transparent hover:border-gray-300"
                              }`}
                            >
                              <Image
                                src={file.path}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                              {file.filename === s.selected && (
                                <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help section */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">Generate More Images</h2>
          <div className="font-mono text-sm bg-black/30 rounded-lg p-4 overflow-x-auto">
            <p className="text-gray-400 mb-2"># Generate images for a slot</p>
            <p className="mb-4">npm run generate-image -- --slot &lt;name&gt; --prompt &quot;Your prompt&quot; --count 3</p>
            <p className="text-gray-400 mb-2"># Options</p>
            <p className="text-gray-300">--slot &nbsp;&nbsp;&nbsp;Slot name (e.g., hero, services/ai)</p>
            <p className="text-gray-300">--prompt Prompt for image generation</p>
            <p className="text-gray-300">--count &nbsp;Number of variants (default: 3)</p>
            <p className="text-gray-300">--aspect Ratio: 16:9, 4:3, 1:1, 9:16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

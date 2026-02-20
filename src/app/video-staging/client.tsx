"use client";

import { useState, useEffect } from "react";
import type { VideoManifest, VideoSlot } from "@/lib/videos/types";

export function VideoStagingClient() {
  const [manifest, setManifest] = useState<VideoManifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSlots, setExpandedSlots] = useState<Set<string>>(new Set());
  const [currentIndexes, setCurrentIndexes] = useState<Record<string, number>>({});

  // Generation form state
  const [genSlot, setGenSlot] = useState("");
  const [genPrompt, setGenPrompt] = useState("");
  const [genCount, setGenCount] = useState(2);
  const [genAspect, setGenAspect] = useState<"16:9" | "9:16">("16:9");
  const [genDuration, setGenDuration] = useState<5 | 6 | 8>(8);
  const [generating, setGenerating] = useState<string | null>(null); // slot name being generated
  const [genOutput, setGenOutput] = useState<string | null>(null);

  useEffect(() => {
    fetchManifest();
  }, []);

  async function fetchManifest() {
    try {
      const response = await fetch("/api/video-staging");
      if (!response.ok) {
        throw new Error("Failed to fetch manifest");
      }
      const data = await response.json();
      setManifest(data);

      // Initialize current indexes to selected or 0
      const indexes: Record<string, number> = {};
      Object.entries(data.slots).forEach(([key, slot]) => {
        const s = slot as VideoSlot;
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

  async function selectVideo(slot: string, filename: string) {
    try {
      const response = await fetch("/api/video-staging", {
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

  async function deleteVideo(slot: string, filename: string) {
    try {
      const response = await fetch("/api/video-staging", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, filename }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete video");
      }

      const data = await response.json();
      setManifest(data.manifest);

      // Adjust index if needed
      setCurrentIndexes((prev) => {
        const current = prev[slot] ?? 0;
        const newTotal = data.manifest.slots[slot]?.files.length ?? 0;
        if (newTotal === 0) return { ...prev, [slot]: 0 };
        if (current >= newTotal) return { ...prev, [slot]: newTotal - 1 };
        return prev;
      });
    } catch {
      setError("Failed to delete video");
    }
  }

  async function generateVideo(slot: string, prompt: string, count: number) {
    setGenerating(slot);
    setGenOutput(null);
    try {
      const response = await fetch("/api/video-staging/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, prompt, count }),
      });

      const data = await response.json();

      if (!response.ok) {
        setGenOutput(data.error + (data.details ? `\n${data.details}` : ""));
        return;
      }

      setGenOutput("Videos generated successfully!");
      // Refresh manifest to show new videos
      await fetchManifest();
      // Clear form
      setGenSlot("");
      setGenPrompt("");
    } catch {
      setGenOutput("Failed to generate videos. Check the console.");
    } finally {
      setGenerating(null);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Staging</h1>
          <p className="text-gray-600">
            Review and select generated videos for each slot. Selected videos will be used in production.
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No videos generated yet</h2>
            <p className="text-gray-600 mb-6">Use the form below to generate your first videos.</p>
          </div>
        )}

        {/* Slot cards */}
        <div className="space-y-6">
          {slots.map(([key, slot]) => {
            const s = slot as VideoSlot;
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

                {/* Expanded empty state — generate inline */}
                {isExpanded && s.files.length === 0 && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="py-8 text-center">
                      {generating === key ? (
                        <div>
                          <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">Generating videos...</p>
                          <p className="text-sm text-gray-400 mt-1">This may take 2-4 minutes per video</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-500 mb-4">No variants yet. Generate some videos for this slot.</p>
                          <div className="max-w-md mx-auto space-y-3">
                            <input
                              type="text"
                              placeholder="Describe the video you want..."
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                              value={generating === null && genSlot === key ? genPrompt : ""}
                              onChange={(e) => {
                                setGenSlot(key);
                                setGenPrompt(e.target.value);
                              }}
                            />
                            <div className="flex gap-2 justify-center">
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                                value={genSlot === key ? genAspect : "16:9"}
                                onChange={(e) => {
                                  setGenSlot(key);
                                  setGenAspect(e.target.value as "16:9" | "9:16");
                                }}
                              >
                                <option value="16:9">16:9</option>
                                <option value="9:16">9:16</option>
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                                value={genSlot === key ? genDuration : 8}
                                onChange={(e) => {
                                  setGenSlot(key);
                                  setGenDuration(Number(e.target.value) as 5 | 6 | 8);
                                }}
                              >
                                <option value={5}>5s</option>
                                <option value={6}>6s</option>
                                <option value={8}>8s</option>
                              </select>
                              <select
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                                value={genSlot === key ? genCount : 2}
                                onChange={(e) => {
                                  setGenSlot(key);
                                  setGenCount(Number(e.target.value));
                                }}
                              >
                                <option value={1}>1 variant</option>
                                <option value={2}>2 variants</option>
                                <option value={3}>3 variants</option>
                              </select>
                            </div>
                            <button
                              onClick={() => {
                                if (genPrompt.trim()) {
                                  generateVideo(key, genPrompt, genCount);
                                }
                              }}
                              disabled={!genPrompt.trim() || generating !== null}
                              className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition"
                            >
                              Generate Videos
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Expanded content */}
                {isExpanded && s.files.length > 0 && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {/* Metadata */}
                    <div className="py-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Aspect:</span>
                        <span className="ml-2 font-medium text-gray-900">{s.aspect}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-2 font-medium text-gray-900">{s.duration}s</span>
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
                      {/* Video container */}
                      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        {currentFile && (
                          <video
                            key={currentFile.path}
                            controls
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-contain"
                          >
                            <source src={currentFile.path} type="video/mp4" />
                          </video>
                        )}

                        {/* Navigation arrows */}
                        {s.files.length > 1 && (
                          <>
                            <button
                              onClick={() => navigateCarousel(key, "prev", s.files.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => navigateCarousel(key, "next", s.files.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition z-10"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        {/* Counter */}
                        <div className="absolute bottom-2 right-2 px-3 py-1 bg-black/50 text-white text-sm rounded-full z-10">
                          {currentIndex + 1} / {s.files.length}
                        </div>
                      </div>

                      {/* File info and actions */}
                      {currentFile && (
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{currentFile.filename}</p>
                            <p className="text-sm text-gray-500">
                              {currentFile.durationSeconds}s &middot; Generated{" "}
                              {new Date(currentFile.generatedAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => deleteVideo(key, currentFile.filename)}
                              className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition"
                            >
                              Delete
                            </button>
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
                                onClick={() => selectVideo(key, currentFile.filename)}
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
                              className={`relative w-28 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition bg-gray-900 ${
                                index === currentIndex
                                  ? "border-teal-500"
                                  : file.filename === s.selected
                                    ? "border-purple-500"
                                    : "border-transparent hover:border-gray-300"
                              }`}
                            >
                              <video
                                preload="metadata"
                                className="w-full h-full object-cover"
                                muted
                              >
                                <source src={`${file.path}#t=0.5`} type="video/mp4" />
                              </video>
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

                      {/* Generate more for this slot */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {generating === key ? (
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <div className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
                            Generating more videos... This may take a few minutes.
                          </div>
                        ) : (
                          <button
                            onClick={() => generateVideo(key, s.prompt, 1)}
                            disabled={generating !== null}
                            className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg font-medium transition"
                          >
                            + Generate More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Generate form */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
          <h2 className="text-xl font-bold mb-2">Generate Videos</h2>
          <p className="text-gray-400 mb-6 text-sm">Create new video variants for any slot. Videos typically take 2-4 minutes to generate.</p>

          {generating && (
            <div className="mb-6 flex items-center gap-3 bg-teal-500/20 border border-teal-500/30 rounded-lg px-4 py-3">
              <div className="w-5 h-5 border-3 border-teal-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
              <p className="text-teal-200 text-sm">
                Generating videos for <span className="font-semibold text-white">{generating}</span>... This may take a few minutes.
              </p>
            </div>
          )}

          {genOutput && !generating && (
            <div className={`mb-6 rounded-lg px-4 py-3 text-sm ${genOutput.includes("successfully") ? "bg-teal-500/20 border border-teal-500/30 text-teal-200" : "bg-red-500/20 border border-red-500/30 text-red-200"}`}>
              <pre className="whitespace-pre-wrap font-mono">{genOutput}</pre>
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Slot Name</label>
                <input
                  type="text"
                  placeholder="e.g., hero-video, services-video"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  value={genSlot}
                  onChange={(e) => setGenSlot(e.target.value)}
                  disabled={generating !== null}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Aspect</label>
                  <select
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                    value={genAspect}
                    onChange={(e) => setGenAspect(e.target.value as "16:9" | "9:16")}
                    disabled={generating !== null}
                  >
                    <option value="16:9">16:9</option>
                    <option value="9:16">9:16</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Duration</label>
                  <select
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                    value={genDuration}
                    onChange={(e) => setGenDuration(Number(e.target.value) as 5 | 6 | 8)}
                    disabled={generating !== null}
                  >
                    <option value={5}>5s</option>
                    <option value={6}>6s</option>
                    <option value={8}>8s</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Count</label>
                  <select
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                    value={genCount}
                    onChange={(e) => setGenCount(Number(e.target.value))}
                    disabled={generating !== null}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Prompt</label>
              <textarea
                placeholder="Describe the video you want to generate..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                rows={2}
                value={genPrompt}
                onChange={(e) => setGenPrompt(e.target.value)}
                disabled={generating !== null}
              />
            </div>
            <button
              onClick={() => {
                if (genSlot.trim() && genPrompt.trim()) {
                  generateVideo(genSlot.trim(), genPrompt, genCount);
                }
              }}
              disabled={!genSlot.trim() || !genPrompt.trim() || generating !== null}
              className="w-full md:w-auto px-6 py-2.5 bg-teal-500 hover:bg-teal-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition"
            >
              {generating ? "Generating..." : "Generate Videos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import type { GuideToC } from "@/data/guides";

interface TableOfContentsProps {
  items: GuideToC[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      {/* Mobile ToC toggle */}
      <div className="lg:hidden sticky top-[72px] z-30 bg-white border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-black"
        >
          <span>Table of Contents</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <nav className="px-6 pb-4 max-h-[50vh] overflow-y-auto">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left py-1.5 text-sm transition-colors ${
                      item.level === 2 ? "pl-4" : ""
                    } ${
                      activeId === item.id
                        ? "text-teal-500 font-medium"
                        : "text-black/50 hover:text-black/80"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop ToC sidebar */}
      <nav className="hidden lg:block sticky top-32 self-start max-h-[calc(100vh-10rem)] overflow-y-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">
          Contents
        </p>
        <ul className="space-y-1 border-l border-gray-200">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left py-1.5 text-sm transition-all border-l-2 -ml-[2px] ${
                  item.level === 2 ? "pl-6" : "pl-4"
                } ${
                  activeId === item.id
                    ? "border-l-teal-500 text-teal-500 font-medium"
                    : "border-l-transparent text-black/50 hover:text-black/80 hover:border-l-gray-300"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

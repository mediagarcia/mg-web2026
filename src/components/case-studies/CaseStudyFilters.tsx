"use client";

import { industries, services, Industry, Service } from "@/data/case-studies";

interface CaseStudyFiltersProps {
  selectedIndustry: Industry;
  selectedService: Service;
  onIndustryChange: (industry: Industry) => void;
  onServiceChange: (service: Service) => void;
}

export function CaseStudyFilters({
  selectedIndustry,
  selectedService,
  onIndustryChange,
  onServiceChange,
}: CaseStudyFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      {/* Industry Filter */}
      <div className="relative">
        <label htmlFor="industry-filter" className="sr-only">
          Filter by industry
        </label>
        <select
          id="industry-filter"
          value={selectedIndustry}
          onChange={(e) => onIndustryChange(e.target.value as Industry)}
          className="appearance-none bg-white border border-black/10 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-black/80 cursor-pointer hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
        >
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-black/40">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Service Filter */}
      <div className="relative">
        <label htmlFor="service-filter" className="sr-only">
          Filter by service
        </label>
        <select
          id="service-filter"
          value={selectedService}
          onChange={(e) => onServiceChange(e.target.value as Service)}
          className="appearance-none bg-white border border-black/10 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-black/80 cursor-pointer hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
        >
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-black/40">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedIndustry !== "All Industries" ||
        selectedService !== "All Services") && (
        <button
          onClick={() => {
            onIndustryChange("All Industries");
            onServiceChange("All Services");
          }}
          className="text-sm font-medium text-black/50 hover:text-teal-500 transition-colors flex items-center gap-1.5"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Clear filters
        </button>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  FeaturedCaseStudy,
  CaseStudyCard,
  CaseStudyFilters,
} from "@/components/case-studies";
import {
  getFeaturedCaseStudy,
  filterCaseStudies,
  type Industry,
  type Service,
} from "@/data/case-studies";

export function WorkPageContent() {
  const [selectedIndustry, setSelectedIndustry] =
    useState<Industry>("All Industries");
  const [selectedService, setSelectedService] =
    useState<Service>("All Services");

  const featuredStudy = getFeaturedCaseStudy();
  const filteredStudies = filterCaseStudies(selectedIndustry, selectedService);
  const nonFeaturedStudies = filteredStudies.filter((s) => !s.featured);

  return (
    <>
      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FeaturedCaseStudy caseStudy={featuredStudy} />
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-3 block">
                Case Studies
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                All projects
              </h2>
            </div>
          </div>

          <CaseStudyFilters
            selectedIndustry={selectedIndustry}
            selectedService={selectedService}
            onIndustryChange={setSelectedIndustry}
            onServiceChange={setSelectedService}
          />

          {nonFeaturedStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonFeaturedStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.slug}
                  caseStudy={study}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-black/50 text-lg">
                No case studies match the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-black">200+</p>
              <p className="text-sm text-black/50 mt-2">CRM Implementations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-black">98%</p>
              <p className="text-sm text-black/50 mt-2">Client Retention</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-black">$4M+</p>
              <p className="text-sm text-black/50 mt-2">Revenue Attributed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-black">50+</p>
              <p className="text-sm text-black/50 mt-2">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

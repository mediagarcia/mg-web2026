"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Media Garcia worked with us to turn our ideas and tight timeline into a reality, making it the easiest website project I've ever managed. Their designers and developers were incredible, and we're already planning our next project with them!",
    author: "Ashley Sims",
    title: "VP of Marketing",
    company: "American Hole 'n One",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "We have been working with Media Garcia for a few months, and it has been an excellent experience. They helped us solve multiple HubSpot Sales configuration challenges with professionalism and exceptional communication.",
    author: "Victoria Naef",
    title: "Agency Marketing Manager",
    company: "Marketing Agency",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "Media Garcia helped us create custom email and landing page templates, delivering exactly what we needed. They're flexible and produce quality results, whether for small projects or long-term strategy consulting.",
    author: "R. Higgins",
    title: "Marketing Manager",
    company: "Enel X North America",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "I'm an expert in my field, not in HubSpot, but Media Garcia made it easy to migrate my business to a streamlined system. They designed funnels, automated email sequences, and created workflows, allowing my business to handle more clients effortlessly.",
    author: "K. Wade",
    title: "CEO",
    company: "Professional Services",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "Media Garcia is professional, responsive, and offers great value for the cost. Their fair pricing and exceptional work make them a game-changer for your website and CRM.",
    author: "Dr. Brandon Allen",
    title: "CEO",
    company: "Health and Wellness",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "Media Garcia listened to my business needs and provided solutions to optimize my website and implement a CRM that works for me. They are exceptional at what they do and are wonderful teachers throughout the process.",
    author: "Bert Jones",
    title: "CEO",
    company: "Blue Phoenix Events",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "I highly recommend the team at Media Garcia. Their expertise in CRM implementation, website optimization, and technical support has significantly impacted my team's success.",
    author: "Joe Tosti",
    title: "Agency Marketing Manager",
    company: "Marketing Agency",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
  {
    quote: "Media Garcia was instrumental in scaling us up with HubSpot by stepping into the role of operations before we hired a full-time specialist. They set up our CRM, email workflows, and reporting dashboards, which we greatly appreciate.",
    author: "Y. Chow",
    title: "Marketing Manager",
    company: "SaaS Company",
    image: "/images/testimonials/placeholder.jpg", // TODO: Request photo
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-[var(--spacing-section)] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black"
          >
            Trusted by growth-focused teams
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-3xl p-8 lg:p-16"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-teal-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl lg:text-4xl font-medium leading-relaxed text-black mb-10">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-teal-500/20">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-black">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-black/60">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-teal-500 w-8"
                    : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4">
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

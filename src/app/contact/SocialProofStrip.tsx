"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Media Garcia worked with us to turn our ideas and tight timeline into a reality, making it the easiest website project I\u2019ve ever managed.",
    author: "Ashley Sims",
    title: "VP of Marketing",
    company: "American Hole \u2018n One",
  },
  {
    quote:
      "Media Garcia made it easy to migrate my business to a streamlined system. They designed funnels, automated email sequences, and created workflows, allowing my business to handle more clients effortlessly.",
    author: "K. Wade",
    title: "CEO",
    company: "Professional Services",
  },
  {
    quote:
      "Media Garcia is professional, responsive, and offers great value for the cost. Their fair pricing and exceptional work make them a game-changer for your website and CRM.",
    author: "Dr. Brandon Allen",
    title: "CEO",
    company: "Health and Wellness",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProofStrip() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-8 text-center"
        >
          What our clients say
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100"
            >
              <StarRating />
              <p className="text-black/70 text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-black text-sm">{t.author}</p>
                <p className="text-xs text-black/40">
                  {t.title}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

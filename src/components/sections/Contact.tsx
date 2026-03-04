"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {

  return (
    <section id="contact" className="py-[var(--spacing-section)] bg-gray-900 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="organic-shape w-[500px] h-[500px] bg-teal-500 -top-20 -right-20 opacity-10" />
      <div className="organic-shape w-[300px] h-[300px] bg-neon-purple-500 bottom-0 left-0 opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block"
            >
              Get Started
            </motion.span>
            <motion.h2
              id="journey-cta-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="journey-destination text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-white mb-6"
            >
              Ready to talk about your revenue?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8"
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours with a customized plan of action.
            </motion.p>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10"
            >
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold flex items-center justify-center">1</span>
                  <p className="text-sm text-white/60"><strong className="text-white">We respond within 24 hours</strong> — A real person reviews your inquiry.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold flex items-center justify-center">2</span>
                  <p className="text-sm text-white/60"><strong className="text-white">Discovery call</strong> — 15 minutes to understand your goals and challenges.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold flex items-center justify-center">3</span>
                  <p className="text-sm text-white/60"><strong className="text-white">Platform-agnostic recommendation</strong> — We suggest the right approach for you.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold flex items-center justify-center">4</span>
                  <p className="text-sm text-white/60"><strong className="text-white">Custom proposal</strong> — Timeline, investment, and expected outcomes.</p>
                </div>
              </div>
              <p className="text-xs text-white/30 mt-4">No hard sell. No platform lock-in. Just a conversation about what&apos;s possible.</p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium">Email us</p>
                  <a href="mailto:hello@mediagarcia.com" className="text-white font-medium hover:text-teal-400 transition-colors">
                    hello@mediagarcia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium">Call us (US/Canada)</p>
                  <a href="tel:+18886124250" className="text-white font-medium hover:text-teal-400 transition-colors">
                    +1 888-612-4250
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium">Location</p>
                  <p className="text-white font-medium">Saint Paul, MN</p>
                  <p className="text-white/50 text-sm">Minnesota, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/40 font-medium">Team</p>
                  <p className="text-white/50 text-sm">Distributed remote team</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/10 ring-1 ring-black/[0.04]">
              <h3 className="text-xl font-bold text-black mb-1">Start the conversation</h3>
              <p className="text-sm text-black/50 mb-6">Fill out the form and we&apos;ll be in touch within 24 hours.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

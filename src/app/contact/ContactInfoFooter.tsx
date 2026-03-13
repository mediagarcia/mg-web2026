"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    label: "Phone",
    value: "+1 888-612-4250",
    subtext: "US & Canada toll-free",
    href: "tel:+18886124250",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@mediagarcia.com",
    subtext: "We respond within 24 hours",
    href: "mailto:hello@mediagarcia.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: "Saint Paul, Minnesota",
    subtext: "USA",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function ContactInfoFooter() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method) => {
            const content = (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm text-black/40 font-medium">{method.label}</p>
                  <p className="text-black font-medium text-sm">{method.value}</p>
                  <p className="text-xs text-black/40">{method.subtext}</p>
                </div>
              </div>
            );

            if (method.href) {
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              );
            }

            return <div key={method.label}>{content}</div>;
          })}
        </motion.div>
      </div>
    </section>
  );
}

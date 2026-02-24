"use client";

import { motion } from "framer-motion";

interface ContentSectionProps {
  id: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
  background?: "white" | "gray";
}

export function ContentSection({
  id,
  title,
  badge,
  children,
  background = "white",
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 ${background === "gray" ? "bg-gray-50" : "bg-white"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {badge && (
          <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
            {badge}
          </span>
        )}
        <h2 className="text-2xl lg:text-3xl font-black text-black mb-8 scroll-mt-32">
          {title}
        </h2>
        <div className="space-y-6">{children}</div>
      </motion.div>
    </section>
  );
}

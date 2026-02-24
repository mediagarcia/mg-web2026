"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatHighlightProps {
  stats: Stat[];
  variant?: "bar" | "cards";
}

export function StatHighlight({ stats, variant = "bar" }: StatHighlightProps) {
  if (variant === "cards") {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 text-center"
          >
            <p className="text-3xl lg:text-4xl font-black text-teal-500">{stat.value}</p>
            <p className="text-sm text-black/60 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-black rounded-2xl p-8 lg:p-12">
      <div className={`grid grid-cols-2 ${stats.length > 2 ? "lg:grid-cols-4" : "lg:grid-cols-2"} gap-8 text-center`}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-3xl lg:text-5xl font-black text-teal-500">{stat.value}</p>
            <p className="text-white/60 mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

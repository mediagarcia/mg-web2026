"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Years Experience",
    description: "Building HubSpot systems",
  },
  {
    value: 200,
    suffix: "+",
    label: "CRM & RevOps Implementations",
    description: "Successfully deployed",
  },
  {
    value: 50,
    suffix: "+",
    label: "Five-Star Reviews",
    description: "From real clients",
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence",
  },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * value);

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl lg:text-6xl font-black text-teal-500 mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-lg font-bold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

interface ProcessStepsProps {
  steps: Step[];
  variant?: "horizontal" | "vertical";
}

export function ProcessSteps({ steps, variant = "vertical" }: ProcessStepsProps) {
  if (variant === "horizontal" && steps.length <= 4) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <span className="text-4xl font-black text-teal-500/20">{step.number}</span>
            <h3 className="text-lg font-bold text-black mt-3 mb-2">{step.title}</h3>
            <p className="text-sm text-black/60">{step.description}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="flex gap-6"
        >
          <div className="shrink-0 w-16 text-center">
            <span className="text-3xl font-black text-teal-500/30">{step.number}</span>
          </div>
          <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
            <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
            <p className="text-black/60 leading-relaxed">{step.description}</p>
            {step.details && (
              <ul className="mt-3 space-y-1">
                {step.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-black/50">
                    <span className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

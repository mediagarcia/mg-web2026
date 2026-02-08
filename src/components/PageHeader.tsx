"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  compactBottom?: boolean;
}

export function PageHeader({ badge, title, description, breadcrumbs, compactBottom }: PageHeaderProps) {
  return (
    <section className={`pt-32 lg:pt-40 bg-gray-50 relative overflow-hidden ${compactBottom ? "pb-8 lg:pb-12" : "pb-16 lg:pb-24"}`}>
      {/* Grid pattern background */}
      <FadingGridPattern
        type="dots"
        color="gray"
        opacity={0.1}
        spacing={32}
        fadeDirection="both"
      />

      {/* Decorative gradient orbs */}
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-32 -right-32 opacity-40"
        intensity="subtle"
        blur="xl"
      />
      <GradientOrb
        color="purple"
        size="lg"
        className="bottom-0 left-1/4 opacity-20"
        intensity="subtle"
        blur="xl"
      />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-black/40 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span className="text-black/20">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-black/60">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-black/40 hover:text-teal-500 transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            {badge}
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,6vw,4rem)] font-black leading-tight text-black mb-6 max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

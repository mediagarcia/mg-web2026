"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "HubSpot Onboarding", href: "/services/hubspot-onboarding", description: "Get your team up and running fast" },
  { label: "Sales Enablement", href: "/services/sales-enablement", description: "Empower your sales team to close more" },
  { label: "Marketing Automation", href: "/services/marketing-automation", description: "Automate campaigns that convert" },
  { label: "CRM Migration", href: "/services/crm-migration", description: "Seamless data transfer & setup" },
  { label: "Reporting & Analytics", href: "/services/reporting", description: "Data-driven decision making" },
  { label: "Custom Integrations", href: "/services/integrations", description: "Connect your tech stack" },
];

const industries = [
  { label: "Information Technology", href: "/industries/information-technology", description: "Solutions for IT companies" },
  { label: "SaaS", href: "/industries/saas", description: "Scale your subscription business" },
];

const navItems = [
  { label: "Services", href: "/services/hubspot-onboarding", hasDropdown: true, dropdown: services },
  { label: "Industries", href: "/industries", hasDropdown: true, dropdown: industries },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ items, isOpen, onClose }: { items: typeof services; isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden"
          onMouseLeave={onClose}
        >
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <span className="block text-sm font-semibold text-black group-hover:text-teal-500 transition-colors">
                  {item.label}
                </span>
                <span className="block text-xs text-black/50 mt-0.5">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Media<span className="text-teal-500">Garcia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-black/80 hover:text-teal-500 transition-colors relative group inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                {item.hasDropdown && item.dropdown && (
                  <DropdownMenu
                    items={item.dropdown}
                    isOpen={openDropdown === item.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors duration-300"
            >
              Get Started
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-12 min-h-full flex flex-col">
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <span className="text-2xl font-bold text-black/40 block mb-3">
                            {item.label}
                          </span>
                          <ul className="space-y-2 pl-4 border-l-2 border-teal-500/20">
                            {item.dropdown?.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2"
                                >
                                  <span className="text-lg font-semibold text-black hover:text-teal-500 transition-colors">
                                    {subItem.label}
                                  </span>
                                  <span className="block text-sm text-black/50">
                                    {subItem.description}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-2xl font-bold text-black hover:text-teal-500 transition-colors block"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-500 transition-colors duration-300 mt-8"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

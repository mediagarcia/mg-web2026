"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Zap,
  Database,
  BarChart3,
  Puzzle,
  Bot,
  Code,
  Megaphone,
  HeartPulse,
  Cpu,
  Cloud,
  Library,
  ClipboardCheck,
  BookOpen,
  Calculator,
  DollarSign,
  ChevronDown,
  ArrowRight,
  Grid3X3,
  type LucideIcon,
} from "lucide-react";

// ============================================================================
// MENU DATA - Edit these to update menu items
// ============================================================================

type MenuItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

const hubspotServices: MenuItem[] = [
  { label: "HubSpot Onboarding", href: "/services/hubspot-onboarding", description: "Get your team up and running fast", icon: Rocket },
  { label: "Sales Enablement", href: "/services/sales-enablement", description: "Empower your sales team to close more", icon: TrendingUp },
  { label: "Marketing Automation", href: "/services/marketing-automation", description: "Automate campaigns that convert", icon: Zap },
  { label: "CRM Migration", href: "/services/crm-migration", description: "Zero-downtime data transfer & setup", icon: Database },
  { label: "Reporting & Analytics", href: "/services/reporting", description: "Data-driven decision making", icon: BarChart3 },
  { label: "Custom Integrations", href: "/services/integrations", description: "Connect your tech stack", icon: Puzzle },
];

const additionalServices: MenuItem[] = [
  { label: "AI Automation", href: "/services/ai-automation", description: "Intelligent workflow automation", icon: Bot },
  { label: "Development", href: "/services/development", description: "Custom software solutions", icon: Code },
  { label: "Marketing", href: "/services/marketing", description: "Strategic marketing services", icon: Megaphone },
];

const industries: MenuItem[] = [
  { label: "Healthcare", href: "/industries/healthcare", description: "HIPAA-compliant solutions", icon: HeartPulse },
  { label: "Information Technology", href: "/industries/information-technology", description: "Solutions for IT companies", icon: Cpu },
  { label: "SaaS", href: "/industries/saas", description: "Scale your subscription business", icon: Cloud },
];

const resources: MenuItem[] = [
  { label: "Resource Center", href: "/resources", description: "Guides, tools, and insights", icon: Library },
  { label: "HubSpot Assessment", href: "/resources/assessment", description: "Evaluate your HubSpot setup", icon: ClipboardCheck },
  { label: "Guides & Best Practices", href: "/resources/guides", description: "Expert tips and strategies", icon: BookOpen },
  { label: "ROI Calculator", href: "/resources/roi-calculator", description: "Calculate your potential ROI", icon: Calculator },
  { label: "TCO Calculator", href: "/resources/tco-calculator", description: "Total cost of ownership analysis", icon: DollarSign },
];

// ============================================================================
// MEGA MENU COMPONENT
// ============================================================================

function MegaMenu({
  type,
  isOpen,
  onClose,
  isScrolled,
}: {
  type: "services" | "industries" | "resources";
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className={`fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-100 ${
            isScrolled ? "top-[72px]" : "top-[88px]"
          }`}
          onMouseLeave={onClose}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
            {type === "services" && <ServicesMegaMenu onClose={onClose} />}
            {type === "industries" && <IndustriesMegaMenu onClose={onClose} />}
            {type === "resources" && <ResourcesMegaMenu onClose={onClose} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* HubSpot Services */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
          HubSpot Services
        </h3>
        <div className="space-y-1">
          {hubspotServices.map((item) => (
            <MenuLink key={item.href} item={item} onClose={onClose} />
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
          Additional Services
        </h3>
        <div className="space-y-1">
          {additionalServices.map((item) => (
            <MenuLink key={item.href} item={item} onClose={onClose} />
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Not sure which service?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Book a free consultation and we&apos;ll help you find the perfect solution.
          </p>
        </div>
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function IndustriesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {industries.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group block p-5 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-gray-50 transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors mb-3">
            <item.icon className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
            {item.label}
          </h3>
          <p className="text-xs text-gray-500">{item.description}</p>
        </Link>
      ))}

      {/* View All */}
      <Link
        href="/industries"
        onClick={onClose}
        className="group block p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all"
      >
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-teal-600 mb-3">
          <Grid3X3 className="w-5 h-5" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
          View All Industries
        </h3>
        <p className="text-xs text-gray-500">Explore all industry solutions</p>
      </Link>
    </div>
  );
}

function ResourcesMegaMenu({ onClose }: { onClose: () => void }) {
  const [featured, ...rest] = resources;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Featured Resource */}
      <Link
        href={featured.href}
        onClick={onClose}
        className="group block p-6 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white"
      >
        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
          <featured.icon className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold mb-1">{featured.label}</h3>
        <p className="text-sm text-white/80 mb-4">{featured.description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium">
          Explore Resources
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>

      {/* Other Resources */}
      {rest.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group block p-5 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-gray-50 transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors mb-3">
            <item.icon className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
            {item.label}
          </h3>
          <p className="text-xs text-gray-500">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

function MenuLink({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
        <item.icon className="w-4 h-4" />
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
          {item.label}
        </span>
        <span className="block text-xs text-gray-500">{item.description}</span>
      </div>
    </Link>
  );
}

// ============================================================================
// NAV ITEMS
// ============================================================================

type NavItem = {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenuType?: "services" | "industries" | "resources";
};

const navItems: NavItem[] = [
  { label: "Services", href: "#", hasMegaMenu: true, megaMenuType: "services" },
  { label: "Industries", href: "#", hasMegaMenu: true, megaMenuType: "industries" },
  { label: "Resources", href: "#", hasMegaMenu: true, megaMenuType: "resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

// ============================================================================
// MAIN NAVIGATION COMPONENT
// ============================================================================

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMegaMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMegaMenu(null), 150);
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
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Media<span className="text-teal-500">Garcia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors inline-flex items-center gap-1 group"
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMegaMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                {item.hasMegaMenu && item.megaMenuType && (
                  <MegaMenu
                    type={item.megaMenuType}
                    isOpen={openMegaMenu === item.label}
                    onClose={() => setOpenMegaMenu(null)}
                    isScrolled={isScrolled}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
            >
              Book a Strategy Call
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
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-12 min-h-full flex flex-col">
              <nav className="flex-1">
                <ul className="space-y-6">
                  {/* Services */}
                  <MobileMenuSection
                    title="Services"
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    <MobileMenuCategory title="HubSpot Services" items={hubspotServices} onClose={() => setIsMobileMenuOpen(false)} />
                    <MobileMenuCategory title="Additional Services" items={additionalServices} onClose={() => setIsMobileMenuOpen(false)} />
                  </MobileMenuSection>

                  {/* Industries */}
                  <MobileMenuSection
                    title="Industries"
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    <MobileMenuItems items={industries} onClose={() => setIsMobileMenuOpen(false)} />
                  </MobileMenuSection>

                  {/* Resources */}
                  <MobileMenuSection
                    title="Resources"
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    <MobileMenuItems items={resources} onClose={() => setIsMobileMenuOpen(false)} />
                  </MobileMenuSection>

                  {/* Simple Links */}
                  <li>
                    <Link
                      href="/pricing"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors block"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors block"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-600 transition-colors mt-8"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================================
// MOBILE MENU HELPERS
// ============================================================================

function MobileMenuSection({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <li>
      <span className="text-2xl font-bold text-gray-400 block mb-3">{title}</span>
      {children}
    </li>
  );
}

function MobileMenuCategory({
  title,
  items,
  onClose,
}: {
  title: string;
  items: MenuItem[];
  onClose: () => void;
}) {
  return (
    <div className="mb-4">
      <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
        {title}
      </span>
      <MobileMenuItems items={items} onClose={onClose} />
    </div>
  );
}

function MobileMenuItems({
  items,
  onClose,
}: {
  items: MenuItem[];
  onClose: () => void;
}) {
  return (
    <ul className="space-y-1 pl-4 border-l-2 border-teal-100">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onClose}
            className="block py-2"
          >
            <span className="text-base font-medium text-gray-900">{item.label}</span>
            <span className="block text-sm text-gray-500">{item.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

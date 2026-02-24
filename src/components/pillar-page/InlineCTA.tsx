import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "subtle" | "prominent";
}

export function InlineCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "subtle",
}: InlineCTAProps) {
  if (variant === "prominent") {
    return (
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 lg:p-10 text-white my-8">
        <h3 className="text-xl lg:text-2xl font-black mb-3">{title}</h3>
        <p className="text-white/80 mb-6 max-w-xl">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={primaryAction.href}
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            {primaryAction.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
            >
              {secondaryAction.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-2xl p-8 my-8 bg-white">
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-black/60 mb-6">{description}</p>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={primaryAction.href}
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          {primaryAction.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors"
          >
            {secondaryAction.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

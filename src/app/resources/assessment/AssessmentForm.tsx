"use client";

import Link from "next/link";

export function AssessmentForm() {
  return (
    <div className="text-center py-4">
      <p className="text-white/60 text-sm mb-4">
        Ready to get started? Reach out and we&apos;ll walk you through the assessment process.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "1e17d757-c025-44e9-880f-7c4b012695a7";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Newsletter Signup",
      fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    });

    setStatus(result.success ? "success" : "error");
  };

  if (status === "success") {
    return (
      <p className="text-teal-400 text-sm font-medium py-2">
        You&apos;re in — thanks for joining us! We&apos;ll keep it useful, never spammy.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/[0.08] border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-teal-500 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Sign Up"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}

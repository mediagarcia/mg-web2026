"use client";

import { useState, type FormEvent } from "react";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "ea85ebc5-732f-4c64-a26d-c80eb800e790";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Poco Waitlist",
      fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    });

    setStatus(result.success ? "success" : "error");
  };

  if (status === "success") {
    return (
      <p className="text-amber-500 text-sm font-semibold py-2">
        You&apos;re on the list!
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
          className="flex-1 bg-amber-50 border border-amber-200 rounded-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-amber-500/30 hover:shadow-amber-500/40 transition-all disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Notify Me"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}

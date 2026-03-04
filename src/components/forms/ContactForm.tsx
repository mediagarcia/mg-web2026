"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "9889726d-8529-4a21-a79a-3fd746e3fc44";
const SUBSCRIPTION_TYPE_ID = 1315317;
const PRIVACY_TEXT_PLAIN =
  "Media Garcia needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.";

const INQUIRY_OPTIONS = [
  { label: "Select inquiry type", value: "" },
  { label: "Service Request", value: "Service Request" },
  { label: "Business Partnership", value: "Business Partnership" },
  { label: "Other (specify in message)", value: "Other (specify in message)" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");
    setErrorMsg("");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Contact",
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: firstname },
        { objectTypeId: "0-1", name: "lastname", value: lastname },
        { objectTypeId: "0-1", name: "company", value: company },
        { objectTypeId: "0-1", name: "phone", value: phone },
        { objectTypeId: "0-1", name: "email", value: email },
        { objectTypeId: "0-1", name: "inquiry_type", value: inquiryType },
        { objectTypeId: "0-1", name: "message", value: message },
      ],
      legitimateInterest: {
        value: true,
        subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
        legalBasis: "LEGITIMATE_INTEREST_PQL",
        text: PRIVACY_TEXT_PLAIN,
      },
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <p className="text-teal-600 text-lg font-semibold">Thanks for reaching out!</p>
        <p className="text-sm text-black/50 mt-2">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="First Name *" required value={firstname} onChange={(e) => setFirstname(e.target.value)} className={inputBase} />
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} className={inputBase} />
      </div>

      <input type="text" placeholder="Company *" required value={company} onChange={(e) => setCompany(e.target.value)} className={inputBase} />
      <input type="tel" placeholder="Phone Number *" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputBase} />
      <input type="email" placeholder="Email *" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputBase} />

      <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className={inputBase}>
        {INQUIRY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <textarea placeholder="Message *" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputBase} resize-vertical min-h-[120px]`} />

      <p className="text-[10px] text-black/30 leading-snug">
        Media Garcia needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>

      {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-teal-500/35 hover:shadow-teal-500/45 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "SENDING..." : "LET'S TALK"}
      </button>
    </form>
  );
}

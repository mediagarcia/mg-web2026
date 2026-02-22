"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (HubSpot Forms API, Formspree, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
        <h3 className="text-2xl font-bold text-black mb-4">Thank you!</h3>
        <p className="text-black/60">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
            What can we help with?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="hubspot-onboarding">HubSpot Onboarding</option>
            <option value="sales-enablement">Sales Enablement</option>
            <option value="marketing-automation">Marketing Automation</option>
            <option value="crm-migration">CRM Migration</option>
            <option value="integrations">Custom Integrations</option>
            <option value="reporting">Reporting & Analytics</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            placeholder="What are your goals? What challenges are you facing?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
        >
          Send My Request
        </button>
        <p className="text-xs text-black/40 text-center mt-4">
          We&apos;ll respond within 24 hours with next steps.
        </p>
      </form>
    </div>
  );
}

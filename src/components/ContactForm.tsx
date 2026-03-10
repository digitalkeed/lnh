"use client";

import { useState } from "react";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email address.");
      return;
    }
    setSuccess(true);
    setName("");
    setEmail("");
    setCompany("");
    setService("");
    setMessage("");
  }

  return (
    <div>
      <div className="section-label gap-3 mb-6">
        <span className="w-8 h-px bg-gold" />
        Send a Message
      </div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label htmlFor="fname" className="block text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
            Your Name
          </label>
          <input
            id="fname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full py-4 bg-transparent border-0 border-b border-[var(--line)] font-sans text-[0.95rem] text-ink outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="femail" className="block text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
            Email Address
          </label>
          <input
            id="femail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@yourcompany.com"
            className="w-full py-4 bg-transparent border-0 border-b border-[var(--line)] font-sans text-[0.95rem] text-ink outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="fcompany" className="block text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
            Company / Brand
          </label>
          <input
            id="fcompany"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your Company Name"
            className="w-full py-4 bg-transparent border-0 border-b border-[var(--line)] font-sans text-[0.95rem] text-ink outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="fservice" className="block text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
            Service of Interest
          </label>
          <select
            id="fservice"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full py-4 bg-transparent border-0 border-b border-[var(--line)] font-sans text-[0.95rem] text-ink outline-none focus:border-gold transition-colors appearance-none"
          >
            <option value="">Select a service...</option>
            <option>Amazon Growth Strategy</option>
            <option>Listing Optimization</option>
            <option>Advertising Management</option>
            <option>Distribution</option>
            <option>Brand Protection</option>
            <option>Not sure — let&apos;s talk</option>
          </select>
        </div>
        <div>
          <label htmlFor="fmessage" className="block text-[0.7rem] tracking-[0.15em] uppercase text-muted mb-2 font-medium">
            Message
          </label>
          <textarea
            id="fmessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your brand and what you're looking to achieve..."
            rows={5}
            className="w-full py-4 bg-transparent border-0 border-b border-[var(--line)] font-sans text-[0.95rem] text-ink outline-none focus:border-gold transition-colors resize-y min-h-[120px]"
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center font-sans">
          Send Message →
        </button>
      </form>
      {success && (
        <div className="mt-6 p-6 bg-gold/10 border border-gold text-ink text-[0.88rem] leading-relaxed">
          Thank you for reaching out! We&apos;ve received your message and will be in touch within one business day. We
          look forward to learning about your brand.
        </div>
      )}
    </div>
  );
}

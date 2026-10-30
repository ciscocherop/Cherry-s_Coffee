"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { products } from "@/content/products";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Web3Forms key — safe to include in client code (read-only, submit-only key).
 * Submissions are delivered to ciscocherry@gmail.com.
 */
const WEB3FORMS_KEY = site.web3formsKey;

export default function EnquiryForm({ variant }: { variant: "contact" | "wholesale" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this, humans don't
    if (data.get("botcheck")) return;

    data.set("access_key", WEB3FORMS_KEY);
    data.set(
      "subject",
      variant === "wholesale"
        ? `Wholesale enquiry — ${site.name}`
        : `Website message — ${site.name}`,
    );
    data.set("from_name", `${site.name} website`);
    // Ensure replies go back to the sender
    data.set("replyto", String(data.get("email") ?? ""));

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message ?? "Submission failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="p-8 text-center"
        style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
        role="status"
      >
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, color: "var(--accent)" }}>
          Thank you!
        </p>
        <p className="mt-2" style={{ color: "var(--primary)", fontSize: "15px" }}>
          Message sent. We&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          className="btn-accent mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 p-6 sm:p-8"
      style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
    >
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
          Your name *
          <input name="name" required className="field mt-1" autoComplete="name" />
        </label>
        {variant === "wholesale" ? (
          <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
            Business name *
            <input name="business" required className="field mt-1" autoComplete="organization" />
          </label>
        ) : (
          <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
            Phone / WhatsApp
            <input name="phone" type="tel" className="field mt-1" autoComplete="tel" />
          </label>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
          Email *
          <input name="email" type="email" required className="field mt-1" autoComplete="email" />
        </label>
        {variant === "wholesale" ? (
          <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
            Phone / WhatsApp *
            <input name="phone" type="tel" required className="field mt-1" autoComplete="tel" />
          </label>
        ) : (
          <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
            Topic
            <select name="topic" className="field mt-1" defaultValue="General question">
              <option>General question</option>
              <option>Order or delivery</option>
              <option>Visiting Sipi</option>
              <option>Partnership</option>
            </select>
          </label>
        )}
      </div>

      {variant === "wholesale" && (
        <>
          <fieldset>
            <legend style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
              Products of interest
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {products.map((p) => (
                <label key={p.slug} className="flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <input
                    type="checkbox"
                    name="products[]"
                    value={p.name}
                    className="h-4 w-4"
                    style={{ accentColor: "var(--accent)" }}
                  />
                  {p.name}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
            Estimated quantity per month
            <select name="quantity" className="field mt-1" defaultValue="">
              <option value="" disabled>Select an estimate</option>
              <option>Under 10 kg</option>
              <option>10 – 50 kg</option>
              <option>50 – 200 kg</option>
              <option>Over 200 kg</option>
            </select>
          </label>
        </>
      )}

      <label className="block" style={{ fontSize: "13px", fontWeight: 600, color: "var(--primary)" }}>
        Message *
        <textarea name="message" required rows={5} className="field mt-1" />
      </label>

      {status === "error" && (
        <p
          className="p-3 text-sm"
          role="alert"
          style={{ borderRadius: "var(--radius)", backgroundColor: "oklch(0.52 0.17 30 / 0.1)", color: "var(--accent)" }}
        >
          {errorMsg} — or reach us directly on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        className="btn-accent"
        disabled={status === "sending"}
        style={{ opacity: status === "sending" ? 0.7 : 1 }}
      >
        {status === "sending"
          ? "Sending…"
          : variant === "wholesale"
            ? "Send wholesale enquiry"
            : "Send message"}
      </button>

      <p style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
        We&apos;ll get back to you soon.
      </p>
    </form>
  );
}

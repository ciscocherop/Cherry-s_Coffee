"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { products } from "@/content/products";

type Status = "idle" | "sending" | "success" | "error";

export default function EnquiryForm({ variant }: { variant: "contact" | "wholesale" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot field: bots fill it in, humans never see it.
    if (data.get("botcheck")) return;

    data.append("access_key", site.web3formsKey);
    data.append("subject", variant === "wholesale" ? `New wholesale enquiry — ${site.name}` : `New website message — ${site.name}`);
    data.append("from_name", `${site.name} website`);

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Submission failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-leaf/30 bg-leaf/10 p-8 text-center" role="status">
        <h3 className="font-serif text-2xl font-bold text-leaf">Thank you!</h3>
        <p className="mt-2 text-roast">Your message has been sent. {site.responseTime}</p>
        <button type="button" className="btn-outline mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-latte bg-white p-6 sm:p-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name *
          <input name="name" required className="field mt-1" autoComplete="name" />
        </label>
        {variant === "wholesale" ? (
          <label className="block text-sm font-medium">
            Business name *
            <input name="business" required className="field mt-1" autoComplete="organization" />
          </label>
        ) : (
          <label className="block text-sm font-medium">
            Phone / WhatsApp
            <input name="phone" type="tel" className="field mt-1" autoComplete="tel" />
          </label>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Email *
          <input name="email" type="email" required className="field mt-1" autoComplete="email" />
        </label>
        {variant === "wholesale" ? (
          <label className="block text-sm font-medium">
            Phone / WhatsApp *
            <input name="phone" type="tel" required className="field mt-1" autoComplete="tel" />
          </label>
        ) : (
          <label className="block text-sm font-medium">
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
            <legend className="text-sm font-medium">Products of interest</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {products.map((p) => (
                <label key={p.slug} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="products[]" value={p.name} className="h-4 w-4 accent-cherry" />
                  {p.name}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block text-sm font-medium">
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

      <label className="block text-sm font-medium">
        Message *
        <textarea name="message" required rows={5} className="field mt-1" />
      </label>

      {status === "error" && (
        <p className="rounded-lg bg-cherry/10 p-3 text-sm text-cherry-dark" role="alert">
          Sorry, your message could not be sent ({error}). Please try again or reach us on WhatsApp.
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : variant === "wholesale" ? "Send wholesale enquiry" : "Send message"}
      </button>
    </form>
  );
}

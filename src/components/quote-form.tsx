"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions";

const initialState: QuoteState = {};

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initialState);
  return (
    <form action={action} className="quote-form">
      <h3 className="mb-2 text-center text-2xl">Request A Freight Quote</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <label>
          Company name
          <input name="company" required placeholder="Company name" />
        </label>
        <label>
          Contact phone
          <input name="phone" required placeholder="Contact phone" />
        </label>
      </div>
      <label>
        Work email
        <input
          name="email"
          required
          type="email"
          placeholder="you@company.com"
        />
      </label>
      <label>
        Shipping frequency
        <select name="frequency" required defaultValue="">
          <option value="" disabled>
            Select shipping frequency
          </option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>One-time shipment</option>
        </select>
      </label>
      <input
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <button
        className="button-primary w-full !rounded-xl !py-4"
        disabled={pending}
      >
        {pending ? "Sending request..." : "Submit Freight Inquiry"}
      </button>
      {state.message && (
        <p
          className={`text-center text-sm ${state.success ? "text-green-700" : "text-red-700"}`}
          role="status"
        >
          {state.message}
        </p>
      )}
      <p className="text-center text-[11px] text-muted">
        By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}

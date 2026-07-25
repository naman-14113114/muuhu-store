"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "./CartProvider";

export function PromoCodeBox() {
  const { applyManualPromoCode, manualPromoCode: appliedCode, totals } = useCart();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(appliedCode ? "Promo code applied successfully." : "");
  const [status, setStatus] = useState<"idle" | "success" | "error">(
    appliedCode ? "success" : "idle",
  );
  const active = totals.itemCount > 0;
  const inputValue = active ? code : "";

  function handleApply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const applied = applyManualPromoCode(code);
    if (applied) {
      setCode("");
      setMessage("Promo code applied successfully.");
      setStatus("success");
      return;
    }

    setMessage("Invalid promo code.");
    setStatus("error");
  }

  return (
    <>
      <form className="flex gap-2 max-[420px]:flex-col" onSubmit={handleApply}>
        <input
          aria-label="Promo code"
          className="buudy-display min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3.5 text-base uppercase tracking-[.08em] text-[var(--plum)] outline-none transition placeholder:text-[rgba(58,31,61,.45)] focus:border-[var(--gold)] disabled:opacity-50 md:text-lg"
          disabled={!active}
          onChange={(event) => {
            setCode(event.target.value);
            if (status !== "idle") {
              setMessage("");
              setStatus("idle");
            }
          }}
          placeholder="Enter Promo Code"
          value={inputValue}
        />
        <button
          className="buudy-display rounded-full bg-[var(--plum)] px-6 py-3.5 text-base uppercase tracking-[.14em] text-[var(--cream)] transition hover:bg-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-50 md:px-7 md:text-lg"
          disabled={!active}
          type="submit"
        >
          Apply
        </button>
      </form>
      {active && message ? (
        <p
          aria-live="polite"
          className={`mt-2 flex items-center gap-2 text-xs font-semibold ${
            status === "success" ? "text-[var(--gold)]" : "text-red-600"
          }`}
        >
          {status === "success" ? <CheckCircle2 size={15} /> : null}
          {message}
        </p>
      ) : null}
    </>
  );
}

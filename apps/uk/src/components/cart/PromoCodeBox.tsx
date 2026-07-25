"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { manualPromoCode } from "@/lib/cart";
import { useCart } from "./CartProvider";

export function PromoCodeBox() {
  const { applyManualPromoCode, manualPromoCode: appliedCode, totals } = useCart();
  const [code, setCode] = useState(appliedCode);
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
      setCode(manualPromoCode);
      setMessage("Promo code applied successfully.");
      setStatus("success");
      return;
    }

    setMessage("Invalid promo code.");
    setStatus("error");
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[rgba(241,223,210,.35)] p-4">
      <p className="buudy-mono text-[var(--gold)]">Promo code</p>
      <form className="mt-3 flex gap-2" onSubmit={handleApply}>
        <input
          aria-label="Promo code"
          className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-semibold uppercase tracking-[.08em] text-[var(--plum)] outline-none transition focus:border-[var(--gold)]"
          disabled={!active}
          onChange={(event) => {
            setCode(event.target.value);
            if (status !== "idle") {
              setMessage("");
              setStatus("idle");
            }
          }}
          placeholder={manualPromoCode}
          value={inputValue}
        />
        <button
          className="rounded-full bg-[var(--plum)] px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-[var(--cream)] transition hover:bg-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!active}
          type="submit"
        >
          Apply
        </button>
      </form>
      {active && message ? (
        <p
          aria-live="polite"
          className={`mt-3 flex items-center gap-2 text-xs font-semibold ${
            status === "success" ? "text-[var(--gold)]" : "text-red-600"
          }`}
        >
          {status === "success" ? <CheckCircle2 size={15} /> : null}
          {message}
        </p>
      ) : null}
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="buudy-section bg-[var(--cream)] py-28">
      <div className="buudy-wrap max-w-2xl text-center">
        <p className="buudy-eyebrow">Page not found</p>
        <h1 className="buudy-heading mt-4">That page could not be found.</h1>
        <p className="buudy-copy mx-auto mt-5 max-w-xl">
          The page you opened is not available. Return to the Muuhu AirPro
          product page to continue shopping.
        </p>
        <Button asChild className="mt-8">
          <Link href="/products/muuhu-hair-dryer">Shop Muuhu AirPro</Link>
        </Button>
      </div>
    </section>
  );
}

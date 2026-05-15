import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "₹999", features: ["10 sectional mocks", "Basic analytics", "1 month access"] },
  { name: "Pro", price: "₹2,499", popular: true, features: ["30 full-length mocks", "AI analytics", "6 months access", "Topper benchmarking"] },
  { name: "Elite", price: "₹4,999", features: ["Unlimited mocks", "1:1 mentor review", "12 months access", "Strategy sessions"] },
];

export default function TestSeriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="gradient-soft py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Test Series</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Mocks that feel like the <span className="text-gradient">real exam</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">Calibrated difficulty, AI-driven analytics, all-India ranking.</p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-8 shadow-soft transition-all ${p.popular ? "gradient-hero text-primary-foreground shadow-elegant scale-[1.02]" : "bg-card hover:shadow-elegant"}`}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Most Popular</span>}
              <div className="font-display text-xl font-semibold">{p.name}</div>
              <div className="mt-3 font-display text-4xl font-bold">{p.price}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? "accent" : "hero"} className="w-full mt-7" asChild>
                <Link to="/contact">Buy Now</Link>
              </Button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

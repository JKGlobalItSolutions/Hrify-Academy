import React from 'react';
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { title: "How to crack CAT 2025 in 6 months", category: "Strategy", time: "8 min", author: "Anika R." },
  { title: "Top 10 current affairs every Bank PO aspirant must read", category: "Current Affairs", time: "5 min", author: "Vivek S." },
  { title: "From 65%ile to IIM-A: Aarav's CAT journey", category: "Student Story", time: "6 min", author: "HRIFY Team" },
  { title: "CLAT Legal Reasoning: 5 frameworks that work", category: "Tips", time: "7 min", author: "Riya M." },
  { title: "GRE Verbal: vocabulary hacks that actually stick", category: "Strategy", time: "9 min", author: "Karthik N." },
  { title: "SSC CGL 2025 notification breakdown", category: "Notifications", time: "4 min", author: "HRIFY Team" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="gradient-soft py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Insights to power your <span className="text-gradient">prep</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">Strategy guides, current affairs, and topper stories — fresh every week.</p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.title} to="/blog" className="group rounded-2xl border bg-card overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="aspect-video gradient-hero relative">
                <span className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-primary">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>By {p.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.time}</span>
                </div>
                <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                  Read article <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

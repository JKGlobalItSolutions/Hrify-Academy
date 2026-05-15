import React from 'react';
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Courses } from "@/components/site/Courses";
import { WhyUs } from "@/components/site/WhyUs";
import { Results } from "@/components/site/Results";
import { Testimonials } from "@/components/site/Testimonials";
import { Centres } from "@/components/site/Centres";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Courses />
        {/* <Results /> */}
        {/* <Testimonials /> */}
        {/* <Centres /> */}
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

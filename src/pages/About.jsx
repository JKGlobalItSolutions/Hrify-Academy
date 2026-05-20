import React from 'react';
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import bannerabout from "../assets/banners/bannarabout.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 overflow-hidden">
        
        
        
        {/* <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden gradient-soft py-20 lg:py-28"
        >
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-2xl animate-blob" />
          <div className="container mx-auto px-4 max-w-3xl text-center relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Us</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Building India's most loved <span className="text-gradient">learning ecosystem</span></h1>
            <p className="mt-5 text-muted-foreground text-lg">Your success journey starts here,
with learning that inspires growth.</p>
          </div>
        </motion.section> */}





<motion.img
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  src={bannerabout}
  alt=""
  className="w-full h-auto object-cover"
/>






        <section className="py-20 container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { icon: Target, title: "Our Mission", text: "Make world-class exam coaching accessible to every Indian student through technology and mentorship." },
              { icon: Eye, title: "Our Vision", text: "Become the most trusted and beloved Ed-Tech brand in India by 2030." },
              // { icon: Award, title: "Our Achievements", text: "12,000+ AIRs under 500 across CAT, Bank, SSC, CLAT and GRE in the last 8 years." },
              // { icon: Users, title: "Our People", text: "200+ mentors from IIMs, IITs, NLUs, RBI, SBI and global tech & finance firms." },
            ].map(({ icon: Icon, ...c }) => (
              <motion.div key={c.title} variants={itemVariants} className="group rounded-2xl border bg-card p-8 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground transition-transform duration-300 group-hover:scale-110"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-16 bg-secondary/40">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          >
            {[["50K+", "Students"], ["12K+", "Top Ranks"], ["200+", "Mentors"], ["10+", "Cities"]].map(([v, l]) => (
              <motion.div key={l} variants={itemVariants}>
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient inline-block hover:scale-110 transition-transform duration-300">{v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

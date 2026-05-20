import React, { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";


import bannercontact from "@/assets/banners/bannercontact.jpeg";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  course: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "Tell us a little more").max(800),
  hp: z.string().max(0).optional(),
});

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

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    try {
      const GOOGLE_SHEETS_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL;
      
      if (!GOOGLE_SHEETS_WEBAPP_URL) {
        console.warn("Google Sheets WebApp URL not found. Mocking submission.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Thanks! Our counsellor will reach out within 24 hours.");
        e.target.reset();
        return;
      }

      const payload = {
        timestamp: new Date().toISOString(),
        fullName: parsed.data.name,
        email: parsed.data.email,
        mobileNumber: parsed.data.phone,
        selectedCourse: parsed.data.course || "",
        message: parsed.data.message,
        formType: "Contact Page",
      };

      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      // With no-cors, we can't read the response, so we assume success if it doesn't throw
      toast.success("Thanks! Our counsellor will reach out within 24 hours.");
      e.target.reset();
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden">
        
        
        
           <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={bannercontact}
                  alt=""
                  className="w-full h-auto object-cover"
                />
        
        
        
        {/* <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="gradient-soft py-20"
        >
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Let's plan your <span className="text-gradient">topper journey</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">Drop your details and a HRIFY mentor will get back within 24 hours.</p>
          </div>
        </motion.section> */}

        <section className="py-16 container mx-auto px-4 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {[
              { icon: Phone, title: "Call us", text: "+91 8608600778", href: "tel:+918608600778" },
              { icon: Mail, title: "Email", text: "support@hrifyacademy.com", href: "mailto:support@hrifyacademy.com" },
              { icon: MapPin, title: "Registered Address", text: "Hrify Technologies pvt ltd, Annai Parvathi Nagar, Opp. collector Office, Vengikkal, Tiruvannamalai - 606604." },
            ].map(({ icon: Icon, ...c }) => (
              <motion.div key={c.title} variants={itemVariants} className="group flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold transition-colors duration-300 group-hover:text-primary">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">{c.text}</a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{c.text}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={onSubmit} 
            className="rounded-3xl border bg-card p-8 shadow-elegant space-y-5"
          >
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Aarav Mehta" required className="transition-all duration-300 focus-visible:ring-accent" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 99999 99999" required className="transition-all duration-300 focus-visible:ring-accent" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="transition-all duration-300 focus-visible:ring-accent" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="course">Course interested</Label>
                <Input id="course" name="course" placeholder="CAT / Bank / CLAT…" className="transition-all duration-300 focus-visible:ring-accent" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Your message</Label>
              <Textarea id="message" name="message" rows={5} placeholder="Tell us about your goals…" required className="transition-all duration-300 focus-visible:ring-accent" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending…" : "Book Free Counselling"}
            </Button>
          </motion.form>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { courseCategories, getCoursesByCategory } from "@/data/courseData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="gradient-soft py-20 lg:py-24"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Course Catalogue</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Find the program built for <span className="text-gradient">your goal</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">From CAT to CLAT, school olympiads to placement training — every program is delivered by India's top mentors.</p>
          </div>
        </motion.section>

        <section className="py-16 container mx-auto px-4 space-y-12">
          {courseCategories.map((category) => {
            const courses = getCoursesByCategory(category.id);
            return (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-end justify-between mb-5">
                  <h2 className="font-display text-2xl font-bold">{category.title}</h2>
                  <span className="text-sm text-muted-foreground">{courses.length} programs</span>
                </div>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {courses.map((course) => (
                    <motion.div key={course.id} variants={itemVariants}>
                      <Link
                        to={`/courses/${course.slug}`}
                        className="group relative block rounded-2xl border bg-card p-5 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-elegant flex items-center justify-between"
                      >
                        <span className="font-display font-semibold transition-colors duration-300 group-hover:text-primary">{course.title}</span>
                        <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-6"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to a counsellor</Link>
            </Button>
          </motion.div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

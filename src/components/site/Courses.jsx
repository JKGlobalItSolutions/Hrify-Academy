import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap, Landmark, Briefcase, Scale, Globe2, BookOpen, Cpu, CheckCircle2, ArrowUpRight } from
"lucide-react";

const courses = [
{ icon: GraduationCap, title: "CAT / MBA", desc: "IIM-focused prep with mock CATs and section-wise drills.", duration: "6–12 months", mode: "Regular Batch", tag: "Most Popular" },
{ icon: Landmark, title: "Bank Exams", desc: "SBI PO, IBPS, RBI Grade B with daily quizzes & current affairs.", duration: "4–8 months", mode: "Weekend Batch" },
{ icon: Briefcase, title: "SSC Exams", desc: "CGL, CHSL, MTS, CPO with concept-first approach.", duration: "5–10 months", mode: "Regular Batch" },
{ icon: Scale, title: "CLAT & Law", desc: "Legal aptitude, reasoning, GK and full-length CLAT mocks.", duration: "6 months", mode: "Weekend Batch" },
{ icon: Globe2, title: "GRE / GMAT", desc: "Advanced verbal & quant modules with direct mentor support.", duration: "3–6 months", mode: "Classroom" },
{ icon: BookOpen, title: "IIT Foundation", desc: "Class 8–10 foundation for JEE/NEET with parent dashboard.", duration: "Yearly", mode: "Regular Batch" },
{ icon: Cpu, title: "CRT Training", desc: "Aptitude, coding, communication & interview mastery.", duration: "8 weeks", mode: "Campus" },
{ icon: CheckCircle2, title: "MTS / CHSL", desc: "Foundation level training with printed materials and tests.", duration: "Flexible", mode: "Classroom" }];

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

export function Courses() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Programs</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Popular courses, designed for outcomes</h2>
            <p className="mt-3 text-muted-foreground">From CAT to CLAT, SSC to GRE — pick a track and start learning today with India's top mentors.</p>
          </div>
          <Button variant="outline" asChild><Link to="/courses">Browse all courses <ArrowUpRight className="h-4 w-4" /></Link></Button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {courses.map(({ icon: Icon, ...c }) =>
          <motion.div key={c.title} variants={itemVariants}>
            <Link
              to="/courses"
              className="group relative block rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-elegant">
              
                {c.tag &&
              <span className="absolute -top-2 right-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-accent-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
                    {c.tag}
                  </span>
              }
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground transition-colors duration-300 group-hover:bg-primary/10">{c.duration}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground transition-colors duration-300 group-hover:bg-primary/10">{c.mode}</span>
                </div>
                <div className="mt-5 flex items-center text-sm font-semibold text-primary transition-all duration-300">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);
}
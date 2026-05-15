import { BrainCircuit, Users, BookOpen, ClipboardList, BarChart3, MessagesSquare, Trophy, Library } from "lucide-react";
import { motion } from "framer-motion";

const features = [
{ icon: Users, title: "Expert Faculty", desc: "Mentors from IIMs, IITs, NLUs and top banks." },
{ icon: BrainCircuit, title: "Sectional Tests", desc: "Rigorous online practice tests and evaluations." },
{ icon: BookOpen, title: "Classroom Training", desc: "Highly interactive face-to-face sessions." },
{ icon: ClipboardList, title: "All-India Mocks", desc: "Compete with thousands and benchmark progress." },
{ icon: MessagesSquare, title: "1:1 Mentorship", desc: "Dedicated online mentor for doubts & strategy." },
{ icon: BarChart3, title: "Progress Tracking", desc: "Detailed analysis for chapters & accuracy." },
{ icon: Trophy, title: "Interview Support", desc: "Resume, mock interviews and GD/PI coaching." },
{ icon: Library, title: "Printed Material", desc: "Comprehensive books and daily practice sheets." }];

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

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why HRIFY</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">A premium learning ecosystem</h2>
          <p className="mt-3 text-muted-foreground">Every tool you need to crack competitive exams — under one premium classroom environment.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, ...f }) =>
          <motion.div key={f.title} variants={itemVariants} className="group rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold transition-colors duration-300 group-hover:text-primary">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);
}
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.jpeg";

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

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-primary text-primary-foreground overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 group cursor-pointer w-fit">
            <img 
              src={logoImg} 
              alt="HRIFY Academy" 
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <p className="text-sm text-primary-foreground/80 max-w-md mt-4">
            India's modern competitive-exam coaching platform — CAT, MBA, Bank, SSC, CLAT, GRE, GMAT, IIT Foundation and CRT placement training.
          </p>
          <form className="flex w-full max-w-sm items-center gap-2 group" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              required
              placeholder="Your email for updates"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 transition-all duration-300 focus-visible:bg-primary-foreground/20 focus-visible:ring-accent" />
            
            <Button type="submit" variant="accent" size="icon" aria-label="Subscribe" className="transition-transform duration-300 group-focus-within:scale-105 group-focus-within:shadow-soft">
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) =>
            <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 hover:shadow-soft transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>

        {[
        { title: "Courses", links: [["CAT / MBA", "/courses"], ["Bank Exams", "/courses"], ["SSC", "/courses"], ["CLAT", "/courses"], ["GRE / GMAT", "/courses"]] },
        { title: "Company", links: [["About Us", "/about"], ["Careers", "/about"]] },
        { title: "Support", links: [["Contact", "/contact"]] }].
        map((col) =>
        <motion.div variants={itemVariants} key={col.title}>
            <h4 className="font-display font-semibold mb-4 text-accent">{col.title}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {col.links.map(([label, to]) =>
            <li key={label}>
                  <Link to={to} className="inline-block hover:text-accent hover:translate-x-1 transition-all duration-300">{label}</Link>
                </li>
            )}
            </ul>
          </motion.div>
        )}
      </motion.div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 text-xs text-primary-foreground/70 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} HRIFY Academy. All rights reserved.</p>
          <p>Crafted for ambitious learners across India.</p>
        </div>
      </div>
    </footer>);
}
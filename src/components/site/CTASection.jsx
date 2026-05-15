import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl gradient-hero p-10 sm:p-14 text-primary-foreground shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl transition-transform duration-1000 hover:scale-110" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl transition-transform duration-1000 hover:scale-110" />
          <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center z-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to begin your topper journey?
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl">
                Book a free counselling session with a HRIFY mentor and get a personalized study plan in 15 minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Book Free Demo <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
}
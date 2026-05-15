import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-2xl animate-blob" />
        <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-2xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 gradient-soft" />
      </div>

      <div className="container mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            #1 Modern Coaching Platform · 2025
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Transform Your <span className="text-gradient">Competitive Exam</span> Preparation
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            India's modern learning platform for CAT, MBA, Bank, SSC, CLAT, GRE, GMAT, IIT Foundation and Placement Training — taught by mentors who've cracked the toughest exams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/courses">Explore Courses <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            {/* <Button variant="outline" size="lg" asChild>
              <Link to="/contact"><PlayCircle className="h-4 w-4" /> Free Demo Class</Link>
            </Button> */}
          </div>

          <motion.dl 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
            { v: "0+", l: "Students Trained" },
            { v: "0", l: "AIR <100 Ranks" },
            { v: "0%", l: "Success Rate" }].
            map((s) =>
            <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-primary">{s.v}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.l}</dd>
              </div>
            )}
          </motion.dl>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative">
            <img
              src={heroImg}
              alt="Student learning with HRIFY Academy"
              width={640}
              height={480}
              loading="eager"
              decoding="async"
              className="relative z-10 w-full max-w-xl mx-auto animate-float" />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-6 left-4 z-20 glass rounded-2xl p-4 shadow-elegant flex items-center gap-3 max-w-[14rem]"
            >
              {/* <div className="h-10 w-10 rounded-full gradient-hero grid place-items-center text-primary-foreground font-bold shadow-soft">A+</div> */}
              <div>
                {/* <div className="text-xs text-muted-foreground">Classroom</div> */}
                <div className="font-semibold text-sm">Success is in the Air</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute -top-2 right-2 z-20 glass rounded-2xl px-4 py-3 shadow-elegant"
            >
              <div className="text-xs text-muted-foreground">Rank Achieved</div>
              <div className="font-display text-xl font-bold text-primary">99.87 %ile</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);
}
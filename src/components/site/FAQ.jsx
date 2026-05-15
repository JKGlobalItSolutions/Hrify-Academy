import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
{ q: "Which exams does HRIFY Academy cover?", a: "CAT, MBA entrances (XAT, NMAT, SNAP, CMAT), Bank (SBI PO, IBPS, RBI), SSC, CLAT, GRE, GMAT, IIT Foundation and CRT placement training." },
{ q: "Do you offer weekend batches?", a: "Yes — every program is available in both Regular Classroom Batch and Weekend Classroom Batch options to suit students and working professionals." },
{ q: "Is there 1:1 mentorship support?", a: "Every enrolled student is assigned a dedicated faculty mentor for doubt-solving, strategy and weekly progress reviews." },
{ q: "Are mock tests included?", a: "Yes. All-India offline mock series with detailed analytics is included with every program. Mocks are calibrated to actual exam difficulty." },
{ q: "How do fees and scholarships work?", a: "Fees vary by program. Merit scholarships of up to 100% are available through our HRIFY Scholarship Test held every quarter." }];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">Questions, answered</h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) =>
            <motion.div key={i} variants={itemVariants}>
              <AccordionItem value={`q-${i}`} className="rounded-xl border bg-card px-5 shadow-soft transition-all duration-300 hover:shadow-elegant">
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline transition-colors duration-300 hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground transition-all duration-300">{f.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
            )}
          </Accordion>
        </motion.div>
      </div>
    </section>);
}
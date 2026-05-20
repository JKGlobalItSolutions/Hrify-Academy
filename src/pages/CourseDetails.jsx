import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCourseBySlug } from "@/data/courseData";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTASection } from "@/components/site/CTASection";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { EnrollmentModal } from "@/components/forms/EnrollmentModal";
import { ChevronRight, CheckCircle2, BookOpen, MonitorPlay, Users, HelpCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  useEffect(() => {
    const data = getCourseBySlug(slug);
    if (!data) {
      // Handle not found
      navigate("/courses");
    } else {
      setCourse(data);
      // Update document title for SEO
      document.title = `${data.title} | HRIFY Academy`;
    }
  }, [slug, navigate]);

  if (!course) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Hero Section */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden gradient-soft pt-16 pb-10 lg:pt-25 lg:pb-24"



          style={{}}
        >


       {/* LEFT RIBBON */}
<div className="hidden lg:block absolute left-20 top-0 z-10">
  
  <div className="relative w-[78px] h-[265px] bg-[#0C84A6]">
    
    {/* Bottom Cut */}
  <div
  className="
    absolute bottom-0 left-0
    w-0 h-0
    border-l-[40px]
    border-r-[40px]
    border-b-[40px]
    border-l-transparent
    border-r-transparent
    border-b-[#eef7fa]
  "
/>
    
  </div>
</div>




          <div className="container mx-auto px-4 max-w-5xl">
            <nav className="flex items-center text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">{course.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              
              
              
              
              <div>
                <span className="inline-block py-1 px-0 rounded-full bg-primary/10 text-primary text-lg font-bold uppercase tracking-wider mb-4">
                  {course.categoryId === 'college' ? 'College Level' : course.categoryId === 'school' ? 'School Level' : course.categoryId === 'gov' ? 'Government Exams' : course.categoryId === 'it' ? 'IT & Software Courses' : 'Undergraduate Programs'}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {course.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => setIsEnrollModalOpen(true)}>
                    Enroll Now
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Get Free Counseling</Link>
                  </Button>
                </div>
              </div>
              
              
              
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl -z-10"></div>
                <div className="bg-card border rounded-2xl p-8 shadow-elegant">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    {course.categoryId === 'it' ? 'Key Technologies' : 'Exams Covered'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.examsCovered ? course.examsCovered.map((exam, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-colors hover:bg-primary/10">
                        {exam}
                      </span>
                    )) : course.topics?.slice(0, 4).map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-colors hover:bg-primary/10">
                        {topic.module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>




            </div>
          </div>
        </motion.section>

        {/* Overview & Highlights */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-20 bg-gradient-to-b from-background to-muted/30 border-b relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-2xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-2xl -z-10" />

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr,400px] gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Course Deep Dive
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 text-foreground">Course Overview</h2>
                <div className="space-y-6">
                  {course.overview.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-base sm:text-lg leading-8 text-muted-foreground max-w-3xl">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="sticky top-24">
                  <div className="bg-card/80 backdrop-blur border border-primary/10 rounded-[2rem] p-8 shadow-elegant relative overflow-hidden group">
                    {/* Subtle highlight gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
                      <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <Trophy className="w-5 h-5" />
                      </div>
                      Key Highlights
                    </h2>

                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-5"
                    >
                      {course.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          variants={staggerItem}
                          className="flex gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-background hover:shadow-soft group/item"
                        >
                          <div className="mt-1 bg-muted p-2 rounded-xl h-fit transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-110 group-hover/item:rotate-3 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground group-hover/item:text-primary transition-colors">{highlight.title}</h4>
                            <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{highlight.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Premium accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-3xl font-bold mb-10 text-center"
            >
              What's Included?
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {course.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-card border p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01]"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4 transition-transform duration-300 hover:scale-110" />
                  <p className="font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Topics / Syllabus */}
        {course.topics && course.topics.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.h2
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-3xl font-bold mb-10 text-center"
              >
                Syllabus Covered
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {course.topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="bg-card border rounded-2xl p-6 shadow-soft hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {topic.module}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {topic.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Faculty & Campus Info */}
        <section className="py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={staggerItem} className="group bg-gradient-to-br from-primary/5 to-transparent border rounded-2xl p-8 flex flex-col justify-center transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <Users className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-3">Expert Faculty Support</h3>
              <p className="text-muted-foreground mb-6">Our educators are industry veterans and top scorers. Get personalized attention through our direct classroom training and regular one-on-one mentorship sessions.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="group bg-gradient-to-br from-accent/5 to-transparent border rounded-2xl p-8 flex flex-col justify-center transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <BookOpen className="w-10 h-10 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-3">Comprehensive Material</h3>
              <p className="text-muted-foreground mb-6">Receive highly researched, printed study modules, daily practice sheets, and access to online section-wise tests evaluated by our experts.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        {course.faqs && course.faqs.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="font-display text-3xl font-bold">Frequently Asked Questions</h2>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {course.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        <CTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t md:hidden z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <Button className="w-full" size="lg" onClick={() => setIsEnrollModalOpen(true)}>
          Enroll Now
        </Button>
      </div>

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onOpenChange={setIsEnrollModalOpen}
        defaultCourse={course.title}
      />
    </div>
  );
}

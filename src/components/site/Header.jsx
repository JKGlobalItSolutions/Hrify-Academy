import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logonav.png";

const navItems = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About" },
{ to: "/courses", label: "Courses" },
// { to: "/test-series", label: "Test Series" },
// { to: "/blog", label: "Blog" },
{ to: "/contact", label: "Contact" }];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex h-9 items-center justify-between px-4">
          <div className="flex items-center gap-5">
            <a href="tel:+919999999999" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> +91 8608600778
            </a>
            <a href="mailto:support@hrifyacademy.com" className="hidden items-center gap-1.5 hover:text-accent transition-colors sm:flex">
              <Mail className="h-3.5 w-3.5" /> support@hrifyacademy.com
            </a>
          </div>
          <span className="hidden md:inline opacity-80">India's Modern Coaching for CAT • Bank • SSC • CLAT • GRE</span>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-out ${
        scrolled ? "glass shadow-soft" : "bg-background/80 backdrop-blur"}`
        }>
        
        <div className="container mx-auto flex py-3 sm:py-4 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logoImg} 
              alt="HRIFY Academy" 
              loading="eager"
              width={200}
              height={80}
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) =>
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-10 py-2 text-lg transition-colors rounded-md hover:bg-secondary/50 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[4px] after:bg-primary after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive
                    ? "font-semibold text-primary bg-secondary"
                    : "font-medium text-foreground/80 hover:text-primary"
                }`
              }>
              
                {item.label}
              </NavLink>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {/* <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Login</Link>
            </Button> */}
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </div>

          <button
            aria-label="Menu"
            className="lg:hidden rounded-md p-2 hover:bg-secondary transition-colors"
            onClick={() => setOpen((v) => !v)}>
            
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open &&
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t bg-background/95 backdrop-blur overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) =>
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm transition-colors hover:pl-4 duration-300 ${
                        isActive
                          ? "font-semibold text-primary bg-secondary pl-4"
                          : "font-medium hover:bg-secondary text-foreground/80"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
                <Button variant="hero" className="mt-2 w-full" asChild>
                  <Link to="/contact" onClick={() => setOpen(false)}>Enroll Now</Link>
                </Button>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>
  );
}
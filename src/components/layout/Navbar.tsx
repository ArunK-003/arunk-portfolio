"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

/* ---------- animation variants (typed) ---------- */
const linkVariants: Variants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgba(94, 234, 212, 1)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* ---------- section highlight on scroll ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "";
      navItems.forEach((item) => {
        if (item.href.startsWith("/#")) {
          const id = item.href.substring(2);
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) current = id;
          }
        }
      });
      if (window.scrollY < 50 && !current) current = "hero";
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      document.getElementById(href.substring(2))?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        "bg-slate-900/80",
        (isScrolled || isOpen)
          ? "bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-700/60"
          : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* ---------- Logo ---------- */}
          <Link
            href="/#hero"
            onClick={(e) => handleLinkClick(e, "/#hero")}
            className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            ARUN K
          </Link>

          {/* ---------- Desktop Menu ---------- */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                variants={linkVariants}
                whileHover="hover"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.href.substring(2)
                    ? "text-teal-300 bg-teal-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                )}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* ---------- Mobile Burger ---------- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/60 shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  whileHover="hover"
                  variants={linkVariants}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors",
                    activeSection === item.href.substring(2)
                      ? "bg-teal-500/20 text-teal-300"
                      : "text-slate-200 hover:text-white hover:bg-slate-700/50"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function HeroSection() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,rgb(18, 2, 23) 50%, ${color})`;

  return (
    <motion.section
      id="hero"
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Hello, I&apos;m Arun K!
        </motion.h1>

        <div className="mt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white min-h-[110px]">
          <TypeAnimation
            sequence={[
              "UI UX Designer⚡ ",
              1500,
              "Designing Intuitive and ",
              1500,
              "Create Pixel-Perfect Interfaces🚀",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg text-slate-300">
          A passionate <strong className="text-white">UI/UX Designer</strong>,
          transforming ideas into meaningful interfaces. I craft elegant,
          intuitive, and user-first digital experiences from research to
          interactive prototypes.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link href="#projects" className="flex items-center">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-slate-100 hover:text-white font-medium rounded-lg text-lg px-6 py-3 border-2 border-slate-600 hover:border-slate-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Link href="#contact">Contact me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center space-x-4 sm:space-x-6"
        >
          <Link href="https://github.com/ArunK-003/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="p-3 bg-white/10 hover:bg-white/20 transition">
              <Github className="h-5 w-5 text-white" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/arun-k19/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="p-3 bg-white/10 hover:bg-white/20 transition">
              <Linkedin className="h-5 w-5 text-white" />
            </Button>
          </Link>
          <Link href="mailto:ksarun459@gmail.com">
            <Button variant="ghost" size="icon" className="p-3 bg-white/10 hover:bg-white/20 transition">
              <Mail className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}

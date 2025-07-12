"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, circOut } from "framer-motion";
import { GlassmorphicCard } from "@/components/custom-ui/GlassmorphicCard";
import { SectionHeading } from "@/components/SectionHeading";

const AboutMeSection = () => {
  const profileImageUrl = "/images/profile_pic-placeholder.png";

  /* -------------------- animation variants -------------------- */
  const imageContainer = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: circOut, delay: 0.3 },
    },
  };

  const textFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <section
      id="about"
      className="py-28 sm:py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      {/* --- background blobs --- */}
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-4000" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen blur-3xl opacity-20 sm:opacity-25 animate-blob" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* --- profile image --- */}
          <motion.div
            className="flex justify-center items-center w-full h-full mt-10"
            variants={imageContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative w-full max-w-[560px] h-[560px] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group mx-auto">
              <Image
                src={profileImageUrl}
                alt="Arun K – UI/UX Designer & Front‑end Developer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-100">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- about text --- */}
          <motion.div
            className="space-y-6 -translate-x-4"
            variants={textFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* wrapper div holds the hover shadow classes */}
            <div className="transition-all hover:shadow-[0_0_25px_3px_rgba(34,211,238,0.3)] duration-500 rounded-xl">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300 leading-relaxed lg:text-justify">
                  Hello! I&apos;m{" "}
                  <strong className="text-teal-400">Arun K</strong>, a
                  final‑year Software Engineering student at K. S. Rangasamy
                  College of Technology. My academic path has sharpened my
                  skills in both design and development, but my true passion
                  lies in crafting user‑first interfaces.
                </p>

                <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                  I specialize in modern UI/UX design using tools like{" "}
                  <strong className="font-semibold text-white">Figma</strong> and{" "}
                  <strong className="font-semibold text-white">Adobe XD</strong>.
                  From wireframes to interactive prototypes, I focus on creating
                  intuitive, accessible, and beautiful experiences.
                </p>

                <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                  I’m eager to contribute to innovative projects that push
                  boundaries. I thrive in collaborative teams, always learning
                  and refining my approach. My goal is simple: build meaningful
                  digital products that users love.
                </p>

                {/* --- info fields --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                  <div>
                    <p className="text-xs sm:text-sm text-white/90">📛 Name</p>
                    <p className="font-medium text-zinc-200">Arun K</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/90">📧 Email</p>
                    <Link
                      href="mailto:ksarun459@gmail.com"
                      className="font-medium text-zinc-200 hover:text-teal-400 transition-colors"
                    >
                      ksarun459@gmail.com
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/90">📍 Location</p>
                    <p className="font-medium text-zinc-200">Tamil Nadu, India</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white/90">🟢 Availability</p>
                    <p className="font-medium text-green-400">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

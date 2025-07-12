"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Eye, BadgeCheck } from "lucide-react";
import { Dialog } from "@headlessui/react";

const certifications = [
  {
    title: "Cyber Security and Privacy",
    issuer: "NPTEL",
    description:
      "Advanced concepts in cybersecurity, privacy protection, and secure systems",
    score: "55%",
    duration: "Jul–Oct 2024",
    imageUrl: "/images/Cyber Security and Privacy.jpg",
  },
  {
    title: "Design Thinking",
    issuer: "Infosys Springboard",
    description:
      "Completed a course on user-centered problem solving using design thinking and ideation techniques",
    score: "Successfully Completed",
    duration: "Sep 30, 2024",
    imageUrl: "/images/Java developer.jpg",
  },
  {
    title: "Cloud for Engineering Leaders",
    issuer: "Infosys Springboard",
    description:
      "Completed a course on cloud fundamentals for engineering leaders, covering strategy and architecture",
    score: "Successfully Completed",
    duration: "Sep, 2024",
    imageUrl: "/images/cloud for engineering.jpg",
  },
  {
    title: "Java Developer",
    issuer: "Infosys Springboard",
    description:
      "Completed a course on Java development, covering core concepts and object-oriented programming",
    score: "Successfully Completed",
    duration: "Nov, 2024",
    imageUrl: "/images/Java developer certification.jpg",
  },
  {
    title: "Oracle Database: SQL*Plus",
    issuer: "Infosys Springboard",
    description:
      "Completed a course on Oracle Database focusing on writing and executing efficient SQL queries",
    score: "Successfully Completed",
    duration: "Jun, 2024",
    imageUrl: "/images/oracle databases.jpg",
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    description:
      "Completed a course on MongoDB basics, focusing on NoSQL and document-based data modeling",
    score: "Successfully Completed",
    duration: "Aug, 2024",
    imageUrl: "/images/Introduction to mongodb.jpg",
  },
  {
    title: "Connecting to a MongoDB Database",
    issuer: "MongoDB",
    description:
      "Completed a course on connecting to MongoDB using drivers for database interaction",
    score: "Successfully Completed",
    duration: "Aug, 2024",
    imageUrl: "/images/mongodb connect to database.jpg",
  },
  {
    title: "MATLAB Programming Techniques",
    issuer: "MATLAB",
    description:
      "Completed a course on MATLAB programming, focusing on advanced coding and algorithm development",
    score: "Successfully Completed",
    duration: "Dec, 2023",
    imageUrl: "/images/matlab programming techniques.jpg",
  },
  {
    title: "Google UX Certification",
    issuer: "Coursera",
    description: "",
    duration: "",
    imageUrl: "/images/In process.jpg",
  },
];

export default function CareerGoalsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="py-24 sm:py-32 bg-gradient-to-br from-[#120222] to-[#191132] text-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Certifications" subtitle="My learnings" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  whileHover={{
    scale: 1.04,
    rotate: [0, 2, -1.5, 1, 0],
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  }}
  className="bg-[#211f39] rounded-xl border border-[#4d4d8a] shadow-xl p-6 text-center relative hover:border-teal-400 transition duration-300 hover:shadow-[0_0_25px_4px_rgba(20,255,200,0.4)] hover:shadow-teal-400/40"
>


              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-5">
                <BadgeCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-blue-300 font-medium mb-3">
                {cert.issuer}
              </p>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {cert.description}
              </p>
              <div className="flex justify-between text-sm font-medium text-slate-200 mb-4">
                <span>
                  <span className="font-semibold">Score:</span> {cert.score}
                </span>
                <span>{cert.duration}</span>
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow"
                  disabled
                >
                  <BadgeCheck className="w-4 h-4" /> Certified
                </button>
                <button
                  onClick={() => setSelectedImage(cert.imageUrl)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full bg-black/60 hover:bg-black text-white border border-blue-500 hover:border-white shadow"
                >
                  <Eye className="w-4 h-4" /> Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Certificate Preview"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}

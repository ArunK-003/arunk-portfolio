"use client";

import { testimonialsData } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Experience" subtitle="Internships" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-xl border border-gray-700 bg-gray-800/50 shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-cyan-400 hover:shadow-lg"
            >
              {/* Glowing background layer */}
              <div className="absolute -inset-1 z-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 animate-pulse" />

              {/* Foreground content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                <p className="text-cyan-400 font-medium">{item.author}</p>
                <p className="mt-2 text-gray-300">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

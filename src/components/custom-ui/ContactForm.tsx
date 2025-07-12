"use client";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <motion.form
      action="https://formsubmit.co/ksarun459@gmail.com"
      method="POST"
      className="space-y-5 sm:space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      {/* Hidden settings */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New message from Portfolio Contact Form" />
      <input type="hidden" name="_next" value="https://arunk.dev/thank-you" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500"
          placeholder="Subject about cooperation opportunities..."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500"
          placeholder="Your detailed message here..."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 hover:from-green-500 hover:via-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-teal-400 transition-all duration-300 group transform hover:scale-[1.02]"
        >
          <FiSend size={18} className="-ml-1 mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          Send Message
        </button>
      </div>
    </motion.form>
  );
}

"use client";

import { motion } from "framer-motion";
import { haptic } from "@/lib/haptics";

const SUBSCRIBE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN2iwnRxln-1J6yIbN3_wlYqg133j2ITOige94Yw24e2bYsA/viewform";

const COUNTIES = ["Wake", "Durham", "Orange", "Johnston", "Chatham"];

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center gap-4 px-4 pt-14 pb-8 text-center sm:pt-20 sm:pb-10">
      <motion.div
        className="flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="font-display text-brand-gradient text-5xl leading-tight sm:text-7xl">
          Uniquely You!
        </h1>
        <p className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          Raleigh Metro
        </p>
      </motion.div>

      <motion.p
        className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Celebrating the disability community in the Triangle and surrounding areas
      </motion.p>

      <motion.a
        href={SUBSCRIBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border-3 border-foreground bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg animate-pulse-glow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => haptic("nudge")}
      >
        <span className="text-2xl">📬</span>
        <span className="text-lg">Subscribe FREE</span>
        <motion.svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </motion.svg>
      </motion.a>

      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="flex justify-center gap-2">
          {COUNTIES.slice(0, 3).map((county, i) => (
            <motion.span
              key={county}
              className="app-chip hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              whileHover={{ scale: 1.08, y: -2 }}
            >
              {county}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {COUNTIES.slice(3).map((county, i) => (
            <motion.span
              key={county}
              className="app-chip hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.06 }}
              whileHover={{ scale: 1.08, y: -2 }}
            >
              {county}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        A free monthly magazine by{" "}
        <span className="font-semibold text-foreground">N2 Company</span>
      </motion.p>
    </section>
  );
}

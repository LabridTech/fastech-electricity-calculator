"use client";

import { motion } from "framer-motion";
import { Calculator, Clock, Info } from "lucide-react";
import Link from "next/link";

export default function SplashPage() {
  return (
    <div className="min-h-screen w-full ">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Fastech Electricity Savings Calculator
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-white/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose your calculation method
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-white/60 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Info className="h-4 w-4" />
            Please read the instructions before using the calculator.
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-white/60 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From sidebar you can navigate to the instructions for the respective calculation.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {/* New Meter Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/newmeter">
              <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative z-10">
                  <div className="mb-4 inline-block rounded-full bg-purple-500 p-3">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    Calculate for New Meter
                  </h2>
                  <p className="text-white/80">
                    Start fresh with new meter calculations and get accurate
                    readings
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          </motion.div>

          {/* Old Meter Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/oldmeter">
              <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative z-10">
                  <div className="mb-4 inline-block rounded-full bg-blue-500 p-3">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    Calculate for Old Meter
                  </h2>
                  <p className="text-white/80">
                    Continue with existing meter data for historical tracking
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>© 2025 Labridtech. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}

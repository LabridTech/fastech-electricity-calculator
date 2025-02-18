"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, PlusCircle, BarChart3 } from "lucide-react"
import type React from "react" // Added import for React

interface InstructionPageProps {
  onGetStarted: () => void
}

export default function InstructionPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const steps = [
    {
      title: "Enter Initial Readings",
      description: "Input three values from your Green Meter. Ensure the values are numeric and correctly entered.",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Enter Additional Readings",
      description: "Provide two more values as required. If all inputs are correct, click 'Submit'.",
      icon: <PlusCircle className="w-8 h-8 text-green-500" />,
    },
    {
      title: "View Your Electricity Usage",
      description:
        "The system calculates your usage and displays results. A green banner indicates efficiency, while a red banner suggests high consumption.",
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
    },
  ]

  return (
    <div className=" p-6">
      <motion.div
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">How to Use the Electricity Usage Calculator</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Track your electricity consumption easily using readings from a Green Meter. Follow these simple steps to
            calculate your usage.
          </p>
        </header>

        <section className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              transition={{ delay: 0.2 * (index + 1) }}
              className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Step {index + 1}: {step.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Ensure all inputs are numerical.</li>
            <li>If an error occurs, validation messages will guide corrections.</li>
            <li>Green banner = efficient energy usage (negative value).</li>
            <li>Red banner = high energy usage (positive value).</li>
          </ul>
        </section>

        {/* // <div className="text-center">
        //   <Button onClick={onGetStarted} size="lg" className="text-lg px-8 py-3">
        //     Get Started <ChevronRight className="ml-2 w-5 h-5" />
        //   </Button>
        // </div> */}
      </motion.div>
    </div>
  )
}


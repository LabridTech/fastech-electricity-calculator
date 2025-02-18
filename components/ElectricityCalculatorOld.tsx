"use client";
import { StepOne } from "./StepOneOld";
import { StepTwo } from "./StepTwoOld";
import { ResultDisplay } from "./ResultDisplay";
import { ProgressBar } from "./ProgressBar";
import { motion, AnimatePresence } from "framer-motion";
import useCalculatorForm from "@/hooks/useCalculatorForm";

export default function ElectricityCalculatorOld() {
  const {
    form,
    step,
    nextStep,
    prevStep,
    calculateUsage,
    result,
    isLoading,
    resetForm,
  } = useCalculatorForm();

  const totalSteps = 3; // Including the result display step

  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 dark:bg-background p-5 rounded-2xl shadow-2xl border border-gray-100">
        <div className="flex relative items-center justify-center">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">
            Electricity Usage Calculator
          </h2>
        </div>
        <ProgressBar currentStep={step} totalSteps={totalSteps} />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <StepOne form={form} onNext={nextStep} reset={resetForm} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <StepTwo
                form={form}
                reset={resetForm}
                onSubmit={calculateUsage}
                onBack={prevStep}
                isLoading={isLoading}
              />
            </motion.div>
          )}
          {step === 3 && result !== null && (
            <motion.div
              key="step3"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ResultDisplay result={result.monthlyCost}  onReset={resetForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

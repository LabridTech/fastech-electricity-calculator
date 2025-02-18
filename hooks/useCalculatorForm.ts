"use client";

import { useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { CalculatorForm, CalculatorResult } from "@/types";
import { useEffect } from "react";

export default function useCalculatorForm() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("Result state updated:", result);
  }, [result]);

  const form = useForm<CalculatorForm>({});

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const calculateUsage = async (data: CalculatorForm) => {
    setIsLoading(true);
    console.log("hheeee")
    try {
      if (data.imp0 != 0) {
        console.log(data.input4 + "hell")
        const A = Math.abs(data.imp0 - data.input8);
        const difC = Math.abs(data.impp - data.input6);
        const difB = Math.abs(data.exp0 - data.input9);
        const valueA = Math.abs(difB - A);
        const B = Math.abs(valueA * -27);
        const C = Math.abs(difC * 48);
        const totalUsage = Math.abs(C - B); // example calculation
        const monthlyCost = C - B; // example rate per kWh

        setResult({
          data : data,
          monthlyCost,
        });
      } else {
        let multiplier;
        const valueA = Math.abs(data.input8 - data.input5);
        if(data.input8 < data.input5) {
           multiplier = -27;
        } else {
           multiplier = 41;
        }
        const B = Math.abs(valueA * multiplier);
        const C = Math.abs(data.input6 * 48);
        let monthlyCost;
        if(data.input8 < data.input5) {
           const totalUsage = C - B; // example calculation
            monthlyCost = totalUsage; // example rate per kWh
        } else {
           const totalUsage = B + C; // example calculation
            monthlyCost = - totalUsage; // example rate per kWh
        }
        setResult({
          data : data,
          monthlyCost,   
        });
      }
      // Mock calculation - replace with actual calculation logic
      nextStep();
    } catch (error) {
      console.error("Error calculating usage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setStep(1);
    setResult(null);
  };

  return {
    form,
    step,
    nextStep,
    prevStep,
    calculateUsage,
    result,
    isLoading,
    resetForm,
  };
}

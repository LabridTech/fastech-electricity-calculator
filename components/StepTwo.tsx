import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { CalculatorForm } from "@/types";

type StepTwoProps = {
  form: UseFormReturn<any>;
  onSubmit: (data: CalculatorForm) => void;
  onBack: () => void;
  onNext: () => void;
  isLoading: boolean;
  reset: () => void;
};

export const StepTwo = ({
  form,
  onSubmit,
  onBack,
  onNext,
  isLoading,
  reset,
}: StepTwoProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = form;

  const input9 = Number(watch("input9", 0));
  const input5 = Number(watch("input5", 0));
  const input6 = Number(watch("input6", 0)); // Default to 0 if not filled
  const input8 = Number(watch("input8", 0));
  const input4 = Number(watch("input4", 0));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input9 === input5) {
          //console.log(input9, input5);

          const formData: CalculatorForm = {
            input9: input9,
            input5: input5,
            input8: input8, // Provide default values if not present
            input6: input6,
            input4: input4,
            imp0 : 0,
            impp : 0,
            exp0 : 0,
          };
          onSubmit(formData);
        } else {
          toast({
            title: "Error",
            description: "The value of input 4 and input 5 must be equal",
            variant: "destructive",
          });
          reset();
        }
      }}
      className="space-y-6"
    >
      {[9, 5].map((num) => (
        <div key={num}>
          <Label htmlFor={`input${num}`}>Meter Reading of Number {num}</Label>
          <Input
            id={`input${num}`}
            type="number"
            placeholder={`Enter value for Input ${num}`}
            {...register(`input${num}`, { required: true, min: 0 })}
            className={errors[`input${num}`] ? "border-red-500" : ""}
          />
          {errors[`input${num}`] && (
            <p className="mt-1 text-sm text-red-500">
              This field is required and must be a positive number
            </p>
          )}
        </div>
      ))}
      <div className="flex space-x-4">
        <Button type="button" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1"
          disabled={!isValid || isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
};

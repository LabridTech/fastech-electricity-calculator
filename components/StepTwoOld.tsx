import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {CalculatorForm} from "@/types"

type StepTwoProps = {
  form: UseFormReturn<any>;
  onSubmit: (data: CalculatorForm ) => void;
  onBack: () => void;
  isLoading: boolean;
  reset: () => void;
};

export const StepTwo = ({
  form,
  onSubmit,
  onBack,
  isLoading,
  reset,
}: StepTwoProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = form;

  const meterReading4 = Number(watch("meterReading4", 0));
  const meterReading5 = Number(watch("meterReading5", 0));
  const input6 = Number(watch("input6", 0)); // Default to 0 if not filled
  const input8 = Number(watch("input8", 0));
  const input4 = Number(watch("input4", 0));
  const bill6 = Number(watch("billimp(0)", 0));
  const bill8 = Number(watch("billimp(p)", 0));
  const bill4 = Number(watch("billexp(0)", 0));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (meterReading4 === meterReading5) {
      const formData: CalculatorForm = {
        input9: meterReading4,
        input5: meterReading5,
        input8: input8, // Provide default values if not present
        input6: input6,
        input4: input4,
        imp0 : bill6,
        impp : bill8,
        exp0 : bill4,
      };
      onSubmit(formData);
      
    } else {
      toast({
        title: "Error",
        description: "The values in each column must be equal",
        variant: "destructive",
      });
      reset();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Meter Reading Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meter Readings</h3>
          {[4, 5].map((num) => (
            <div key={`meter${num}`}>
              <Label htmlFor={`meterReading${num}`}>Meter Reading {num}</Label>
              <Input
                id={`meterReading${num}`}
                type="number"
                placeholder={`Enter meter reading ${num}`}
                {...register(`meterReading${num}`, { required: true, min: 0 })}
                className={errors[`meterReading${num}`] ? "border-red-500" : ""}
              />
              {errors[`meterReading${num}`] && (
                <p className="mt-1 text-sm text-red-500">
                  This field is required and must be a positive number
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bills Column */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-semibold">Bills</h3>
          {[4, 5].map((num) => (
            <div key={`bill${num}`}>
              <Label htmlFor={`bill${num}`}>Bill {num}</Label>
              <Input
                id={`bill${num}`}
                type="number"
                placeholder={`Enter bill ${num}`}
                {...register(`bill${num}`, { required: true, min: 0 })}
                className={errors[`bill${num}`] ? "border-red-500" : ""}
              />
              {errors[`bill${num}`] && (
                <p className="mt-1 text-sm text-red-500">
                  This field is required and must be a positive number
                </p>
              )}
            </div>
          ))}
        </div> */}
      </div>

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

export default StepTwo;
import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react"; // Assuming you have an icon library like Lucide for icons
import { useState } from "react";
import { Loader } from "./loader";
import { useToast } from "@/hooks/use-toast";
type StepOneProps = {
  form: UseFormReturn<any>;
  onNext: () => void;
  reset: () => void;
};

export const StepOne = ({ form, onNext , reset }: StepOneProps) => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = form;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  // Watching input values for live validation
  const input6 = Number(watch("input6", 0)); // Default to 0 if not filled
  const input8 = Number(watch("input8", 0));
  const input4 = Number(watch("input4", 0));



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        if (input6 + input8 === input4) {
          onNext();
          setIsLoading(false);
        } else {
          console.log(input6, input8, input4);
          toast({
            title: "Error",
            description: "The sum of input 6 and input 8 must be equal to input 4",
            variant: "destructive",
          });
          setIsLoading(false);
          reset();
        }
      }}
      className="space-y-8"
    >
      {[6, 8, 4].map((num) => (
        <div key={num} className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor={`input${num}`} className="text-primary font-medium">
              Meter Reading  of Number {num}
            </Label>
            <HoverCard>
              <HoverCardTrigger asChild>
                <button type="button" className="text-gray-500 hover:text-gray-700">
                  <Info className="h-4 w-4" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64 p-3 text-sm bg-white shadow-lg rounded-md">
                <p>This is a hover card with additional information about Input {num}.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <Input
            id={`input${num}`}
            type="text"
            inputMode="numeric"
            placeholder={`Enter value of ${num} on Your Green Meter`}
            {...register(`input${num}`, { required: true, min: 0 })}
            className={`w-full border-2  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
              errors[`input${num}`] 
                ? "border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors[`input${num}`] && (
            <p className="text-sm text-red-500 mt-1">
              This field is required and must be a positive number.
            </p>
          )}
        </div>
      ))}

      <Button
        type="submit"
        className={`w-full py-3 text-lg font-semibold transition-all ${
          isValid 
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg" 
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!isValid}
      >
         {isLoading ? <Loader className="h-6 w-6" /> : "Next →"}
      </Button>
    </form>
  );
};
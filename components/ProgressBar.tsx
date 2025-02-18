interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Initial Inputs", "Additional Inputs", "Results"];

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i < currentStep
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            <span className="text-xs mt-1 text-center">{stepLabels[i]}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

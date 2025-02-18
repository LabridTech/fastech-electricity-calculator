import { ResultDisplayProps } from "@/types"


export const ResultDisplay = ({ result, onReset }: ResultDisplayProps) => {
  const isEfficient = result > 0
  const bannerColor = isEfficient
    ? "bg-green-100 border-green-500 text-green-700"
    : "bg-red-100 border-red-500 text-red-700"

  return (
    <div className={`rounded-lg p-4 ${bannerColor} border-l-4 shadow-md`}>
      <h3 className="text-lg font-semibold mb-2">{isEfficient ? "Efficient Usage" : "High Usage"}</h3>
      <p className="text-3xl font-bold">{Math.abs(result).toFixed(2)} PKR</p>
      <p className="mt-2">
        {isEfficient ? "Great job! You're saving energy." : "Consider reducing your electricity consumption."}
      </p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  )
}

export type ResultDisplayProps = {
    result: number
    onReset: () => void
  }

 export interface CalculatorForm {
   input9 : number
   input8 : number
   input5 : number
   input6 : number
   input4 : number
   imp0 : number
   impp : number
   exp0 : number
  }
  
  export interface CalculatorResult {
    data : CalculatorForm
    monthlyCost: number
  }
import { CalculatorAdapter } from "./CalculatorAdapter";
import { ICalculator } from "./ICalculator";

class Main {
  demo() {
    const calculator: ICalculator = new CalculatorAdapter();

    console.log(calculator.sum(5, 6));
    console.log(calculator.subtract(10, 3));
  }
}

const app = new Main();
app.demo();
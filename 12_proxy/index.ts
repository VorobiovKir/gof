import { ICalculator } from "./facade/ICalculator";
import { CalculatorFacade } from "./facade/CalculatorFacade";

class Main {
  async demo() {
    const calculator: ICalculator = new CalculatorFacade();

    const firstNumber = 20;
    const secondNumber = 5;

    const sumResult = await calculator.sum(firstNumber, secondNumber);
    console.assert(sumResult === (firstNumber + secondNumber), 'Sum error!');

    const subtractResult = await calculator.substract(firstNumber, secondNumber);
    console.assert(subtractResult === (firstNumber - secondNumber), 'Subtract error!')
    
    const divideResult = await calculator.divide(firstNumber, secondNumber);
    console.assert(divideResult === (firstNumber / secondNumber), 'Divide error!')
    
    const multiplyResult = await calculator.multiply(firstNumber, secondNumber);
    console.assert(multiplyResult === (firstNumber * secondNumber), 'Multiply error!')
  }
}

const app = new Main();
app.demo();

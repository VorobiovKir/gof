import { Калькулятор } from './Калькулятор';
import { ICalculator } from './ICalculator';

export class CalculatorAdapter implements ICalculator {
  private subject = new Калькулятор();

  public sum(a, b): number {
    return this.subject.сумма(a, b);
  }

  public subtract(a, b): number {
    return this.subject.вычитание(a, b);
  }
}
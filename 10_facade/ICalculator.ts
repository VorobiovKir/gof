export interface ICalculator {
  sum(a: number, b: number): Promise<number>;
  substract(a: number, b: number): Promise<number>;
  divide(a: number, b: number): Promise<number>;
  multiply(a: number, b: number): Promise<number>;
}
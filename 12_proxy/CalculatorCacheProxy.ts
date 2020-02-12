import { CalculatorFacade } from './facade/CalculatorFacade';
import { ICalculator } from "./facade/ICalculator";

export class CalculatorCacheProxy implements ICalculator {
  private calculatorFacade = new CalculatorFacade();
  private cache = {};

  private getCache(key: string): number {
    return this.cache[key] || null;
  }

  private setCache(key: string, value: number): void {
    this.cache[key] = value;
  }

  async sum(a: number, b: number): Promise<number> {
    const cacheKey = `sum(${a}, ${b})`;
    const cachedValue = this.getCache(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    const result = await this.calculatorFacade.sum(a, b);
    this.setCache(cacheKey, result);
    
    return result;
  }

  async substract(a: number, b: number): Promise<number> {
    const cacheKey = `substract(${a}, ${b})`;
    const cachedValue = this.getCache(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    const result = await this.calculatorFacade.substract(a, b);
    this.setCache(cacheKey, result);
    
    return result;
  }

  async multiply(a: number, b: number): Promise<number> {
    const cacheKey = `multiply(${a}, ${b})`;
    const cachedValue = this.getCache(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    const result = await this.calculatorFacade.multiply(a, b);
    this.setCache(cacheKey, result);

    console.log(777, this.cache);
    
    return result;
  }

  async divide(a: number, b: number): Promise<number> {
    const cacheKey = `divide(${a}, ${b})`;
    const cachedValue = this.getCache(cacheKey);

    if (cachedValue) {
      return cachedValue;
    }

    const result = await this.calculatorFacade.divide(a, b);
    this.setCache(cacheKey, result);
    
    return result;
  }
}
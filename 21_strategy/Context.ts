import { ISortStrategy } from './strategies/ISortStrategy';

export class Context {
  constructor(private numbers: number[], private strategy: ISortStrategy) {}

  setStrategy(strategy: ISortStrategy) {
    this.strategy = strategy;
  }

  getSortedList(): number[] {
    return this.strategy.execute(this.numbers);
  }
}
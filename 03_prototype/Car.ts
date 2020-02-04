import ICloneable from './ICloneable';

export default class Car implements ICloneable {
  private color: string;
  private number: string;

  private constructor(private type: string) {}

  static defaultMinivan: Car = new Car('minivan');
  static defaultTruck: Car = new Car('truck');
  static defaultSport: Car = new Car('sport');

  private setColor(color: string): void {
    this.color = color;
  }

  private setNumber(number: string): void {
    this.number = number;
  }

  public getInfo(): string {
    return `
      type: ${this.type},
      color: ${this.color},
      number: ${this.number},
    `;
  }

  static getTruck(color: string, number: string): Car {
    return this.defaultTruck.clone(color, number);
  }
  static getMinivan(color: string, number: string): Car {
    return this.defaultMinivan.clone(color, number);
  }
  static getSport(color: string, number: string): Car {
    return this.defaultSport.clone(color, number);
  }

  clone(color: string, number: string): this {
    const newCar = Object.create(this);
    newCar.setColor(color);
    newCar.setNumber(number);
    
    return newCar;
  }
}
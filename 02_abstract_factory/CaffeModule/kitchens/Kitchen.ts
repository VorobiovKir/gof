import UsaKitchen from './UsaKitchen';
import UkraineKitchen from './UkraineKitchen';
import JapanKitchen from './JapanKitchen';

export default abstract class Kitchen {
  abstract complexDinner(): any;

  static getKitchen(type: string): Kitchen {
    switch(type) {
      case 'usa':
        return new UsaKitchen();
      case 'ukraine':
        return new UkraineKitchen();
      case 'japan':
        return new JapanKitchen();
      default:
        throw new Error(`Kitchen isn't existed!`);
    }
  }
}
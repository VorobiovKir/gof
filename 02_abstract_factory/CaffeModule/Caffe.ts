import Kitchen from './kitchens/Kitchen';

export default class Caffe {
  getComplexDinner(kitchenType: string) {
    const kitchen = Kitchen.getKitchen(kitchenType);
    kitchen.complexDinner();
  }
}
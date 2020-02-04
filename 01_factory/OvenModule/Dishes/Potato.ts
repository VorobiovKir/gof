import Dish from './Dish';

export default class Potato implements Dish {
  baking() { 
    console.log('Potato is prepared'); 
  }
}
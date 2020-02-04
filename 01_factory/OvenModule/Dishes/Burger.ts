import Dish from './Dish';

export default class Burger implements Dish {
  baking() { 
    console.log('Burger is prepared'); 
  }
}
import Dish from './Dish';

export default class Pizza implements Dish {
  baking() { 
    console.log('Pizza is prepared'); 
  }
}
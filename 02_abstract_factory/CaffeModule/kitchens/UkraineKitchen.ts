import Kitchen from './Kitchen';
import UkraineMenu from './Menus/UkraineMenu';

export default class UkraineKitchen implements Kitchen {
  complexDinner() {
    const ukraineMenu = new UkraineMenu();

    ukraineMenu.borsh();
    ukraineMenu.meetBalls();
  }
}
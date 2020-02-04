import Kitchen from './Kitchen';
import JapanMenu from './Menus/JapanMenu';

export default class JapanKitchen implements Kitchen {
  complexDinner() {
    const japanMenu = new JapanMenu();

    japanMenu.sushi();
    japanMenu.sashimi();
  }
}
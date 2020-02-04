import Kitchen from './Kitchen';
import UsaMenu from './Menus/UsaMenu';

export default class UsaKitchen implements Kitchen {
  complexDinner() {
    const usaKitchen = new UsaMenu();

    usaKitchen.burger();
    usaKitchen.stake();
  }
}
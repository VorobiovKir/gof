import { Kitchen } from "./kitchens/Kitchen";
import { UkraineKitchen } from "./kitchens/UkraineKitchen";
import { Menu } from "./Menu";


class Main {
  demo() {
    const ukraineKitchen: Kitchen = new UkraineKitchen;

    const menu = new Menu(ukraineKitchen);
    const complexMenu = menu.complexDinner();
    
    console.log(complexMenu);
  }
}

const app = new Main();
app.demo();

import Car from './Car';

class Main {
  demo() {
    const truck = Car.getTruck('red', 'AH1017BA');
    const sport = Car.getSport('yellow', 'AA1010AC');
    const minivan = Car.getMinivan('tomato', 'BC1314QW');

    const oneMoreMinivan = Car.getMinivan('green', 'QWE123Q');
    
    console.log(truck.getInfo());
    console.log(sport.getInfo());
    console.log(minivan.getInfo());
    console.log(oneMoreMinivan.getInfo());
  }
}

const app = new Main();
app.demo();
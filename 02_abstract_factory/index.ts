import Caffe from './CaffeModule/Caffe';

class Main {
  demo(kitchenType: string) {
    const caffe = new Caffe();
    caffe.getComplexDinner(kitchenType);
  }
}

const app = new Main();
app.demo('ukraine');
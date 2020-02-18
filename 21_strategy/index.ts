import { Context } from "./Context";
import { BubbleSortStrategy } from './strategies/BubbleSortStrategy';
import { QuickSortStrategy } from './strategies/QuickSortStrategy';

class Main {
  demo() {
    const arr = [1, 45, 123, 213, 324, 2, 1, 213, 3];
    
    const context = new Context(arr, new BubbleSortStrategy());
    const bubbleSortedArray = context.getSortedList();
    console.log(bubbleSortedArray);
    
    context.setStrategy(new QuickSortStrategy());
    const quickSortedArray = context.getSortedList();
    console.log(quickSortedArray);
  }
}

const app = new Main();
app.demo();
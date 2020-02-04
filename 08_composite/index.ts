import { Folder } from './Folder';
import { File } from './File';

class Main {
  demo() {
    const rootFolder = new Folder();
    const userFolder = new Folder();
    const systemFolder = new Folder();
    const userFile = new File();

    userFolder.addElement(userFile);
    rootFolder.addElement(userFolder);
    rootFolder.addElement(systemFolder);

    rootFolder.increment();
    userFolder.increment();
    
    console.assert(rootFolder.getInnerCount() === 1, 'Value should be 1');
    console.assert(userFile.getInnerCount() === 2, 'Value should be 2');
    
  }
}

const app = new Main();
app.demo();
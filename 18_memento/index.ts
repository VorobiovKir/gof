import { TextEditor } from "./TextEditor";
import { Caretaker } from "./CareTaker";

class Main {
  demo() {
    const textEditor = new TextEditor();
    const careTaker = new Caretaker(textEditor);

    const firstPhrase = 'Hello World'; 
    textEditor.write(firstPhrase);
    careTaker.backup();

    console.assert(textEditor.getText() === firstPhrase, 'something goes wrong');
    
    const secondPhrase = 'What is your name?';
    textEditor.write(secondPhrase);

    console.assert(textEditor.getText() === firstPhrase + secondPhrase, 'something goes wrong');
    careTaker.undo();

    console.assert(textEditor.getText() === firstPhrase, 'something goes wrong');
  }
}

const app = new Main();
app.demo();

import { TextEditorMomento } from "./TextEditorMomento";
import { TextEditor } from "./TextEditor";

export class Caretaker {
  private momentos: TextEditorMomento[] = [];

  constructor(private textEditor: TextEditor) {}

  backup() {
    this.momentos.push(this.textEditor.save());
  }

  undo() {
    if (this.momentos.length) {
      const lastMomento = this.momentos.pop();
      this.textEditor.load(lastMomento);
    }
  }
}

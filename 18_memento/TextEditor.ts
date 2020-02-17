import { TextEditorMomento } from './TextEditorMomento';

export class TextEditor {
  private state: string = '';

  write(text: string) {
    this.state += text;
  }

  getText(): string {
    return this.state;
  }

  save(): TextEditorMomento {
    return new TextEditorMomento(this.state);
  }

  load(momento: TextEditorMomento): void {
    this.state = momento.getState();
  }
}

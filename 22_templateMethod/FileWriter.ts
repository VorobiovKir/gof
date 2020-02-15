import * as fs from 'fs';
import { WriteStream } from 'fs';

export class FileWriter {
  private filePath: string = './22_templateMethod/file.txt';

  write(): void {
    const stream: WriteStream = fs.createWriteStream(this.filePath, { flags: 'a' });
    stream.once('open', () => {
      this.actionsWithFile(stream);
      stream.end();
    });
  }

  // do nothing by default
  actionsWithFile(fileStream: WriteStream): void {}
}

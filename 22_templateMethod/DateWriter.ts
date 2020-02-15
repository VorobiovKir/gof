import { WriteStream } from 'fs';
import { FileWriter } from './FileWriter';

export class DateWriter extends FileWriter {
  actionsWithFile(stream: WriteStream) {
    stream.write(`${new Date().toLocaleDateString()} \r\n`);
  }
}

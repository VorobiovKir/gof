import { WriteStream } from 'fs';
import { FileWriter } from './FileWriter';

export class TimeWriter extends FileWriter {
  actionsWithFile(stream: WriteStream) {
    stream.write(`${new Date().toLocaleTimeString()} \r\n`);
  }
}

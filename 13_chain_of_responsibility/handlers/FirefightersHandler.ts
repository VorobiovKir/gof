import { Handler } from './Handler';

export class FirefightersHandler extends Handler {
  handle(request: string): string {
    if (request === 'firefighters') {
      return 'Firefighters are invoked';
    }

    return super.handle(request);
  }
}

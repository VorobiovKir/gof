import { Handler } from './Handler';

export class PoliceHandler extends Handler {
  handle(request: string): string {
    if (request === 'police') {
      return 'Police are invoked';
    }

    return super.handle(request);
  }
}

import { Handler } from './Handler';

export class DoctorsHandler extends Handler {
  handle(request: string): string {
    if (request === 'doctors') {
      return 'Doctors are invoked';
    }

    return super.handle(request);
  }
}

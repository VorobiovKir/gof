import { Handler } from './Handler';

export class NotFoundHandler extends Handler {
  handle(request: string): string {
    return `Request ${request} haven't handled! Check please your request type!`;
  }
}

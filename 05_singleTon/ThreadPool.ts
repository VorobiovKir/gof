export class ThreadPool {
  private constructor() {}

  private static limit = 10;

  static threads = [];
  static getThread(): ThreadPool | null {
    if (this.threads.length < this.limit) {
      const thread = new ThreadPool();
      this.threads.push(thread);
      return thread;
    }
    return null;
  }  
}

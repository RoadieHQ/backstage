import { EventEmitter } from 'events';

export class EventStoreClient {
  private readonly db: object[];
  private readonly topic: string;
  private readonly eventEmitter: EventEmitter;
  constructor({ topic }: { topic: string }) {
    this.db = [];
    this.topic = topic;
    this.eventEmitter = new EventEmitter();
  }
  publish(payload: any) {
    console.log('it is saved!!');

    this.eventEmitter.emit('github', payload);
  }
  get(): any {
    if (this.db.length > 0) {
      return this.db.pop();
    }
  }
}

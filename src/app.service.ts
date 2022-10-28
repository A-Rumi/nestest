import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';

@Injectable()
export class AppService {
  constructor(private eventsGateway: EventsGateway) {}

  event() {
    this.eventsGateway.server.emit('hello');
  }
}

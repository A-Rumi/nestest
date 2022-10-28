import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  // socket.on
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data,
    @ConnectedSocket() socket: Socket,
  ): string {
    return data;
  }

  afterInit(server: any): any {
    console.log('socketio init');
  }

  handleConnection(
    @ConnectedSocket() socket: Socket,
    client: any,
    ...args: any[]
  ): any {
    console.log('connected socket');

    socket.emit('hello', 'hello client');
  }

  handleDisconnect(client: any): any {}
}

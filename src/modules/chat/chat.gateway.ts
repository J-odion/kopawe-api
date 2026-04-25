import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat',
})
@Injectable()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() room: string, @ConnectedSocket() client: Socket) {
    client.join(room);
    console.log(`Client ${client.id} joined room: ${room}`);
    return { status: 'joined', room };
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    @MessageBody() data: { room: string; sender: string; message: string },
    @ConnectedSocket() client: Socket,
  ) {
    // Broadcast to the specific room (e.g., CDS-ICT-LAGOS)
    this.server.to(data.room).emit('newMessage', {
      sender: data.sender,
      message: data.message,
      timestamp: new Date(),
    });
  }
}

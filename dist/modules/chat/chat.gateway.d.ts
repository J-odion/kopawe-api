import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoinRoom(room: string, client: Socket): {
        status: string;
        room: string;
    };
    handleMessage(data: {
        room: string;
        sender: string;
        message: string;
    }, client: Socket): void;
}

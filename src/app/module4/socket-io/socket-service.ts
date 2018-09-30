import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  getMessage() {
    return this.socket.fromEvent<any>("message");
  }
  sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }
}

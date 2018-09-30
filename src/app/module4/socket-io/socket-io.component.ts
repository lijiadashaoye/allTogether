import { Component, OnInit } from "@angular/core";
import { ChatService } from "./socket-service";
@Component({
  selector: "app-socket-io",
  templateUrl: "./socket-io.component.html",
  styleUrls: ["./socket-io.component.css"]
})
export class SocketIoComponent implements OnInit {
  constructor(private chat: ChatService) {}
  msg = null;
  ngOnInit() {
    this.chat.getMessage().subscribe(msg => {
      this.msg = msg;
      console.log(msg);
    });
  }
  asdff() {
    this.chat.sendMessage("ddd");
  }
}

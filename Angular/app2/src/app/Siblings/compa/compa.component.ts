import { Component, OnInit } from "@angular/core";
import { SiblingsService } from "../siblings.service";

@Component({
  selector: "app-compa",
  templateUrl: "./compa.component.html",
  styleUrls: ["./compa.component.css"]
})
export class CompaComponent implements OnInit {
  message = "I am Message from Component A";
  person = {
    fname: "Murali",
    lname: "Krishna"
  };
  users = ["Ram", "Ravi", "Kiran"];
  constructor(private sibService: SiblingsService) {}

  ngOnInit(): void {}

  sendMessageFromCompaA() {
    this.sibService.receiveAndSendMessage(this.message);
  }

  sendObjectFromCompA() {
    this.sibService.receiveAndSendObject(this.person);
  }

  sendArrayFromCompA() {
    this.sibService.receiveAndSendArray(this.users);
  }
}

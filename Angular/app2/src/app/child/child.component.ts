import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  //Step 1:
  message = "Hello world from Child Component";

  //Step2:
  //TO send Data to upwords(This is custom Event Handler)
  @Output() sendData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    //TO send Data to upwards
  }

  //Step 3
  sendMessage() {
    this.sendData.emit(this.message);
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  msg = "";
  constructor() {}

  ngOnInit(): void {}
  // Step 5
  getInfo(message) {
    this.msg = message;
  }
}

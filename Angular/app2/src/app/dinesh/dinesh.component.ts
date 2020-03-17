import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dinesh",
  templateUrl: "./dinesh.component.html",
  styleUrls: ["./dinesh.component.css"]
})
export class DineshComponent implements OnInit {
  @Input() message;
  @Input() obj;
  @Input() myusers;
  constructor() {}

  ngOnInit(): void {}
}

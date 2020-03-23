import { Component, OnInit } from "@angular/core";
import { SiblingsService } from "../siblings.service";

@Component({
  selector: "app-compb",
  templateUrl: "./compb.component.html",
  styleUrls: ["./compb.component.css"]
})
export class CompbComponent implements OnInit {
  msg;
  obj;
  users: unknown;
  constructor(private sibService: SiblingsService) {}

  ngOnInit(): void {
    this.sibService.sendInfo.subscribe(res => {
      console.log(res);
      this.msg = res;
    });

    this.sibService.sendObj.subscribe(res => {
      this.obj = res;
    });

    this.sibService.sendArray.subscribe(arr => {
      this.users = arr;
    });
  }
}

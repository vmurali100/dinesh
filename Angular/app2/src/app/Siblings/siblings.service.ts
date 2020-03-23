import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SiblingsService {
  sendInfo = new Subject();
  sendObj = new Subject();
  sendArray = new Subject();
  constructor() {}

  receiveAndSendMessage(message) {
    console.log(message);
    this.sendInfo.next(message);
  }
  receiveAndSendObject(obj) {
    this.sendObj.next(obj);
  }

  receiveAndSendArray(arr) {
    this.sendArray.next(arr);
  }
}

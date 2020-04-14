import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ContactsService {
  constructor(private _http: HttpClient) {}

  getContacts() {
    return this._http.get(
      "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    );
  }
}

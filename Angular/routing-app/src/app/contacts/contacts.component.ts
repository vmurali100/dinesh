import { ContactsService } from "./../contacts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  contacts: any = [];
  todaysDate = new Date();
  searchText;
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}
  users = [];
  ngOnInit(): void {
    this.users = this.userService.getContacts();
  }
  deleteUser(i) {
    console.log(i);
    this.users.splice(i, 1);
  }
  editUser() {}
}

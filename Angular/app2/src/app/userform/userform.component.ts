import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-userform",
  templateUrl: "./userform.component.html",
  styleUrls: ["./userform.component.css"],
})
export class UserformComponent implements OnInit {
  constructor() {}
  users = [];
  isEdit;
  index;
  ngOnInit(): void {}

  addUser(userForm) {
    this.users.push(userForm.value);
    userForm.reset();
  }
  delteUser(i) {
    console.log(i);
    this.users.splice(i, 1);
  }
  editUser(user, i, userForm) {
    this.index = i;
    this.isEdit = true;
    userForm.setValue(user);
  }

  updateUser(userForm) {
    console.log(userForm.value);
    this.isEdit = false;
    this.users[this.index] = userForm.value;
    userForm.reset();
  }
}

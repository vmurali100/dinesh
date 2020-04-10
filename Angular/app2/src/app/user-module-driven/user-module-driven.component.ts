import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-module-driven",
  templateUrl: "./user-module-driven.component.html",
  styleUrls: ["./user-module-driven.component.css"],
})
export class UserModuleDrivenComponent implements OnInit {
  userForm: FormGroup;
  users = [];
  index: any;
  isEdit = false;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
    });
  }

  addUser() {
    console.log(this.userForm.value);
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  delteUser(i) {
    this.users.splice(i, 1);
  }

  editUser(user, i, userForm) {
    this.isEdit = true;
    this.index = i;
    this.userForm.setValue(user);
  }
  updateUser() {
    this.users[this.index] = this.userForm.value;
    this.userForm.reset();
    this.isEdit = false;
  }
}

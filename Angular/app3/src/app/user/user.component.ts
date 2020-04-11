import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  userForm: FormGroup; //: type of variable
  allUsers: any = [];
  isEdit = false;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      id: new FormControl(),
    });
    this.getAllUsersFromServer();
  }

  addUser(userForm) {
    console.log(userForm.value);
    //Application programming interface
    //Ajax
    this._http
      .post("http://localhost:3000/users", userForm.value)
      .subscribe((notification) => {
        console.log("User Added Successfully");
        this.getAllUsersFromServer();
        this.userForm.reset();
      });
  }

  getAllUsersFromServer() {
    this._http.get("http://localhost:3000/users").subscribe((res) => {
      console.log(res);
      this.allUsers = res;
    });
  }

  editUser(user) {
    this.isEdit = true;
    this.userForm.setValue(user);
  }

  deleteUser(user) {
    this._http
      .delete("http://localhost:3000/users/" + user.id)
      .subscribe((res) => {
        this.getAllUsersFromServer();
      });
  }

  updateUser() {
    this._http
      .put(
        "http://localhost:3000/users/" + this.userForm.value.id,
        this.userForm.value
      )
      .subscribe((res) => {
        this.getAllUsersFromServer();
        this.isEdit = false;
        this.userForm.reset();
      });
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // template: `
  //   <h2>Hello World</h2>
  //   <h1>Welcome to Angular {{ title }}</h1>
  // `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app2";
  person = { fname: "Murali", lname: "Krishna" };
  users = ["Ram", "Ravi", "Kiran"];

  ngOnInit() {
    console.log(this);
  }
  values = Object.keys(this.person);
}

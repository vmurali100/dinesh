import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DineshComponent } from "./dinesh/dinesh.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { CompaComponent } from "./Siblings/compa/compa.component";
import { CompbComponent } from "./Siblings/compb/compb.component";
import { UsersComponent } from "./users/users.component";
import { MyformComponent } from "./myform/myform.component";
import { UserformComponent } from "./userform/userform.component";
import { UserModuleDrivenComponent } from "./user-module-driven/user-module-driven.component";

@NgModule({
  declarations: [
    AppComponent,
    DineshComponent,
    ParentComponent,
    ChildComponent,
    CompaComponent,
    CompbComponent,
    UsersComponent,
    MyformComponent,
    UserformComponent,
    UserModuleDrivenComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

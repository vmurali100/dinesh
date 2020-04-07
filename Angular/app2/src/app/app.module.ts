import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DineshComponent } from "./dinesh/dinesh.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { CompaComponent } from "./Siblings/compa/compa.component";
import { CompbComponent } from "./Siblings/compb/compb.component";
import { UsersComponent } from "./users/users.component";
import { MyformComponent } from "./myform/myform.component";
import { UserformComponent } from "./userform/userform.component";

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

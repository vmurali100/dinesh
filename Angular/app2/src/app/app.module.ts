import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DineshComponent } from './dinesh/dinesh.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CompaComponent } from './Siblings/compa/compa.component';
import { CompbComponent } from './Siblings/compb/compb.component';

@NgModule({
  declarations: [
    AppComponent,
    DineshComponent,
    ParentComponent,
    ChildComponent,
    CompaComponent,
    CompbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchuserPipe } from "./searchuser.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    AboutComponent,
    ContactsComponent,
    SearchuserPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    FeaturesComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

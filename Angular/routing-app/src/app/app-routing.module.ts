import { ContactsComponent } from "./contacts/contacts.component";
import { AboutComponent } from "./about/about.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pricing", component: PricingComponent },
  { path: "features", component: FeaturesComponent },
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { TshirtsMenComponent } from "./tshirts-men/tshirts-men.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: TshirtsMenComponent },
  { path: "admin", component: AdminComponent },
  { path: "about", component: AboutUsComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { TshirtsMenComponent } from "./tshirts-men/tshirts-men.component";
import { AdminComponent } from "./admin/admin.component";
import { HttpClientModule } from "@angular/common/http";
import { AboutUsComponent } from './about-us/about-us.component';
import { SugnUpComponent } from './sugn-up/sugn-up.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TshirtsMenComponent,
    AdminComponent,
    AboutUsComponent,
    SugnUpComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

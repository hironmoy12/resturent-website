import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Book a Table",component:BookTableComponent, canActivate:[AuthgaurdGuard]},
  {path:"contact us",component:ContactUsComponent},
  {path:"About us",component:AboutComponent},
  {path:"Menu",component:MenuComponent},
  {path:"Login",component:LoginComponent},
  {path:"Sign up",component:SignupComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"**",redirectTo:"Home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

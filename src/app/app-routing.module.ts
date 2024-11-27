import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'faceSnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponentComponent },
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

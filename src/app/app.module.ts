import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapG1Component } from './face-snap-g1/face-snap-g1.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';




@NgModule({
  declarations: [
    AppComponent,
    FaceSnapG1Component,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    LoginComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

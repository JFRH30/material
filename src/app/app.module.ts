import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentComponent } from './pages/component/component.component';
import { CdkComponent } from './pages/cdk/cdk.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ComponentComponent, CdkComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

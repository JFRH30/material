import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ComponentComponent } from './pages/component/component.component';
import { CdkComponent } from './pages/cdk/cdk.component';

// Shared Component
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ComponentComponent,
    CdkComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

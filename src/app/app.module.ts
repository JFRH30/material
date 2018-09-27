import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ComponentComponent } from './pages/component/component.component';
import { CdkComponent } from './pages/cdk/cdk.component';

// Shared Component
import { ApiViewerComponent } from './shared/component/api-viewer/api-viewer.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { CategoriesComponent } from './shared/component/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentComponent,
    CdkComponent,
    ApiViewerComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    CategoriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

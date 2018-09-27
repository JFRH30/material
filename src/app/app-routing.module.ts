import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CdkComponent } from './pages/cdk/cdk.component';
import { ComponentComponent } from './pages/component/component.component';
import { CategoriesComponent } from './shared/component/categories/categories.component';
import { ApiViewerComponent } from './shared/component/api-viewer/api-viewer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cdk', component: CdkComponent },
  {
    path: 'component',
    component: ComponentComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:item', component: CategoriesComponent },
      { path: 'categories/:item/:component', component: ApiViewerComponent },
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      { path: '**', redirectTo: 'categories' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

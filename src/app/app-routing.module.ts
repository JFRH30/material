import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentComponent } from './pages/component/component.component';
import { CdkComponent } from './pages/cdk/cdk.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cdk', component: CdkComponent },
  { path: 'component', component: ComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

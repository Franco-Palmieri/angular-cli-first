import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { Page404Component } from './page404/page404.component';
import { SinglecardComponent } from './singlecard/singlecard.component';

const routes: Routes = [
  {
    path: 'about',
    component: MainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'singlecard/:id',
    component: SinglecardComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForYouComponent } from './for-you/for-you.component';

const routes: Routes = [
  {
    title: 'TicToc - Home',
    path:'',
    component: HomeComponent
  },
  {
    title: 'TicToc - ForYou',
    path: 'foryou',
    component: ForYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

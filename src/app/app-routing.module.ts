import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';


const routes: Routes = [
  { path: 'home', component: TableauAccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { TableTestComponent } from './table-test/table-test.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: 'home', component: TableauAccueilComponent }
=======
  { path: '', component: TableTestComponent },
  { path: 'home', component: TableTestComponent }
>>>>>>> 87c60b651559d3d1d7537e72e7ad93c59c83b5c2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

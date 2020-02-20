import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { TableTestComponent } from './table-test/table-test.component';


const routes: Routes = [
  { path: '', component: TableTestComponent },
  { path: 'home', component: TableTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

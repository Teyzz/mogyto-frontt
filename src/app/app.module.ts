import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { DroneServiceService } from './service/drone-service.service';
<<<<<<< HEAD
import { TestServiceComponent } from './test-service/test-service.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { TableTestComponent } from './table-test/table-test.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
>>>>>>> 87c60b651559d3d1d7537e72e7ad93c59c83b5c2

@NgModule({
  declarations: [
    AppComponent,
    TableauAccueilComponent,
<<<<<<< HEAD
    TestServiceComponent
=======
    MenuComponent,
    MapComponent,
    TableTestComponent,
    FormulaireComponent
>>>>>>> 87c60b651559d3d1d7537e72e7ad93c59c83b5c2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    NgbModule
=======
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule
>>>>>>> 87c60b651559d3d1d7537e72e7ad93c59c83b5c2
  ],
  providers: [
    DroneServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

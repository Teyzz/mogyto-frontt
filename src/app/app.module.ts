import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { DroneServiceService } from './service/drone-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { TableTestComponent } from './table-test/table-test.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauAccueilComponent,
    MenuComponent,
    MapComponent,
    TableTestComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [
    DroneServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

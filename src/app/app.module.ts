import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { DroneServiceService } from './service/drone-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TableauAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DroneServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

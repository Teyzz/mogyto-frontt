import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAccueilComponent } from './tableau-accueil/tableau-accueil.component';
import { DroneServiceService } from './service/drone-service.service';
import { TestServiceComponent } from './test-service/test-service.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableauAccueilComponent,
    TestServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    DroneServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

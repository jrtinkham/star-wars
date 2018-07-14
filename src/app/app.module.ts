import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MessageService } from './message.service';
import { SWAPIService } from './swapi.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonListComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
 // import { ShipsComponent } from './ships/ships.component';
 // import { ShipDetailComponent } from './ship-detail/ship-detail.component';
 // import { PlanetsComponent } from './planets/planets.component';
 // import { PlanetDetailComponent } from './planet-detail/planet-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    PersonListComponent,
    PersonDetailComponent /*,
    ShipsComponent,
    ShipDetailComponent,
    PlanetsComponent,
    PlanetDetailComponent
    */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    SWAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

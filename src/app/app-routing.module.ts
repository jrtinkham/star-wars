import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PersonListComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
// import { ShipsComponent } from './ships/ships.component';
// import { ShipDetailComponent } from './ship-detail/ship-detail.component';
// import { PlanetsComponent } from './planets/planets.component';
// import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/persons', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'persons', component: PersonListComponent },
    { path: 'persons/:name', component: PersonDetailComponent } /*,
    { path: 'ships', component: ShipsComponent },
    { path: 'ships/:id', component: ShipDetailComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: 'planets/:id', component: PlanetDetailComponent }
    */
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

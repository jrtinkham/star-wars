import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { People } from '../people';
import { SWAPIService } from '../swapi.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    people: People;
    persons: Person[];
    error: any;

    constructor(private swapiService: SWAPIService) { }

    ngOnInit() {
        this.showPeople();
    }

    showPeople() {
        this.swapiService.getPeople()
        // clone the data object, using its known shape
        .subscribe(
            data => this.people = { ...data },
            error => this.error = error // error path
    );
    }
}

import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { People } from '../people';
import { SWAPIService } from '../swapi.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonListComponent implements OnInit {

    people: People;
    persons: Person[];
    error: any;
    url: string;
    //data: Array<any>;

    constructor(private swapiService: SWAPIService) {    }

    ngOnInit() {
        this.showPeople();
    }

    public showPeople() {
        this.swapiService.getPeople()
        // clone the data object, using its known Config shape
        .subscribe(
            data => {
                this.people = { ...data };
                this.persons = this.people.results;
            },
            error => this.error = error // error path
        );
    }



}

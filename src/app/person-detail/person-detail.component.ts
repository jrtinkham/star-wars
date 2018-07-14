import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SWAPIService } from '../swapi.service';
import { Person } from '../person';
import { People } from '../people';


@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

    person: Person;
    error: any;
    loading: boolean=false;
    errorMessage;

    constructor(
        private route: ActivatedRoute,
        private swapiService: SWAPIService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.showPerson();
    }

    public showPerson() {
        this.swapiService.getPerson()
        // clone the data object, using its known Config shape
/*
            .subscribe(
                (response) => { this.person=response; },
                (error) => { this.errorMessage=error; this.loading=false; },
                () => { this.loading=false; }
            );
*/
            .subscribe(
                data => {
                    this.person = { ...data };
                    },
                    error => this.error = error // error path
            );
    }

    goBack(): void {
        this.location.back();
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }

}

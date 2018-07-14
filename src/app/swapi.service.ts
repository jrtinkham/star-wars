import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { ErrorObservable } from 'rxjs/observable/errorObservable';

import { Person } from './person';
import { People } from './people';
 // import { Ship } from './ship';
 // import { Planet } from './planet';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';
 // import { PERSONS } from './mock-persons';
 // import { SHIPS } from './mock-ships';
 // import { PLANETS } from './mock-planets';

@Injectable()
export class SWAPIService {
    error: any;
    headers: string[];
    person: Person;
    people: People;
    persons: Person[];
    data: Array<any>;
    //personUrl: string = "https://swapi.co/api/people/1/";
    //peopleUrl: string = "https://swapi.co/api/people/";

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

// Log a SWAPIService message with the MessageService
    private log(message: string) {
        this.messageService.add('SWAPIService: ' + message);
    }

    peopleUrl: string = "https://swapi.co/api/people/";
    // c3poUrl = "assets/c3po.json";

    public getPeople () {
        const url: string = "https://swapi.co/api/people/";
        this.log(`fetching people from ${url}`);
        return this.http.get<People>(url).pipe(
                tap(_ => this.log(`fetched people from ${url}`)),
                // retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }

    public getPerson () {
        const url = "https://swapi.co/api/people/1/";
        this.log(`fetching person from ${url}`);
        //console.error(url);
        return this.http.get(url).pipe(
                tap(_ => this.log(`fetched people from ${url}`)),
                // retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
                // catchError(this.handleError<Person>(`getPerson name=${name}`))
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    };

// Person Methods
/*
    private personsUrl = 'https://swapi.co/api/people';  // URL to web api

    /// GET heroes from the server
    getPersons(): Observable<any[]> {
        // TODO: send the message _after_ fetching the persons
        this.messageService.add('SWAPIService: fetched persons');
        return this.http.get<any[]>(this.personsUrl)
            .pipe(
                //map(persons => Person[0]),
                tap(persons => this.log(`fetched persons`)),
                catchError(this.handleError('getPersons', []))
            );
    }

    getPerson(id: number): Observable<any> {
        const url = `${this.personsUrl}/${id}`;

        // TODO: send the message _after_ fetching the person
        this.messageService.add(`SWAPIService: fetched person id=${id}`);
        return this.http.get<any>(url)
        .pipe(
            //map(persons => Person[0]),
            tap(_ => this.log(`fetched person id=${id}`)),
            catchError(this.handleError<any>(`getPerson id=${id}`))
        );
    }

// TODO: Future Methods
    getShips(): Observable<Ship[]> {
        // Todo: send the message _after_ fetching the ships
        this.messageService.add('SWAPIService: fetched ships');
        return of(SHIPS);
    }

    getShip(id: number): Observable<Ship> {
        // Todo: send the message _after_ fetching the ship
        this.messageService.add(`SWAPIService: fetched ship id=${id}`);
        return of(SHIPS.find(ship => ship.id === id));
    }

    getPlants(): Observable<Planet[]> {
        // Todo: send the message _after_ fetching the planets
        this.messageService.add('SWAPIService: fetched planets');
        return of(PLANETS);
  }

    getPlanet(id: number): Observable<Planet> {
        // Todo: send the message _after_ fetching the planet
        this.messageService.add(`SWAPIService: fetched planet id=${id}`);
        return of(PLANETS.find(planet => planet.id === id));
    }
*/

}

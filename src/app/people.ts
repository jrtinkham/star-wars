import { Person } from './person';

export interface People {
    count: number;              // -- Total people in the database
    next: string;               // -- URL to next page of people
    previous: string;           // -- URL to previous page of people
    results: Person[];          // -- Array of people
}

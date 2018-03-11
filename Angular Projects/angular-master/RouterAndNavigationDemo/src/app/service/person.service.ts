import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './mock.person';

@Injectable()
export class PersonService {
    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    }
    addPerson(person:Person): void {
		this.getPersons().then(persons => {
		     let maxIndex = persons.length - 1;
		     let personWithMaxIndex = persons[maxIndex];
		     person.id = personWithMaxIndex.id + 1;
		     persons.push(person);}
		);
    }
    getPerson(id: number): Promise<Person> {
        return this.getPersons()
            .then(persons => persons.find(person => person.id === id));
    }
    deletePerson(id: number): void {
		this.getPersons().then(persons => {
		    let person = persons.find(ob => ob.id === id);
                    let personIndex = persons.indexOf(person);
                    persons.splice(personIndex, 1);}
		);
    }
} 
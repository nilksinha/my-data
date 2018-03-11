import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../service/person';
import { PersonService } from '../service/person.service';
@Component({
  selector: 'app-manageperson',
  templateUrl: './manageperson.component.html',
  styleUrls: ['./manageperson.component.css']
})
export class ManagepersonComponent implements OnInit {

  persons: Person[];
  person: Person = new Person();

  constructor(private router: Router,
	        private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
        this.personService.getPersons().then(persons => this.persons = persons);
  }

  updatePerson(id:number): void {
	  this.router.navigate(['/update-person', id]);
  }
  deletePerson(id:number): void {
    this.personService.deletePerson(id);
  }

}

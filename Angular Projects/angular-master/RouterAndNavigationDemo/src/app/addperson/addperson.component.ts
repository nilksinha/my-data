import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../service/person';
import { PersonService } from '../service/person.service';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {

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

  addPerson(): void {
	  this.personService.addPerson(this.person);
        this.router.navigate(['/home']);
  }	

}

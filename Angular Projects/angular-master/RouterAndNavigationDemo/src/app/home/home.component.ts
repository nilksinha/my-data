import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Person } from '../service/person';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: Person[];

  constructor(private personService:PersonService) { }

  getPersons(){
    this.personService.getPersons()
    .then(persons => this.persons = persons);    
  }

  ngOnInit() {
    this.getPersons();
  }

}

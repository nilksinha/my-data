import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Person } from '../service/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-updateperson',
  templateUrl: './updateperson.component.html',
  styleUrls: ['./updateperson.component.css']
})
export class UpdatepersonComponent implements OnInit {

  person: Person = new Person();

  constructor(private route: ActivatedRoute,
              private personService: PersonService,
		          private location: Location) { }

  ngOnInit(): void {
        console.log(this.route.params);
        this.route.params
        .switchMap((params: Params) => this.personService.getPerson(+params['id']))
        .subscribe(person => this.person = person);
  }
  goBack(): void {
      this.location.back();
  }
    

}

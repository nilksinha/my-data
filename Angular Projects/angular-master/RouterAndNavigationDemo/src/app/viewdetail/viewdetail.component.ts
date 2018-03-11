import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../service/person';
import { PersonService } from '../service/person.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {

  person: Person;

  constructor(private route: ActivatedRoute,
	        private router: Router,
	        private personService: PersonService,
		private location: Location) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => 
        this.personService.getPerson(+params['id']))
        .subscribe(person => this.person = person);
  }

  goBack(): void {
      this.location.back();
  }

  updatePerson(id:number): void {
	  this.router.navigate(['/update-person', id]);
  }

}

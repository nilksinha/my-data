import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('denish', [Validators.required,Validators.maxLength(10)]),
	  age: new FormControl(30, Validators.required),
	  city: new FormControl(),
    country: new FormControl(),
    hobbies: new FormArray([])  
  });

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(): void {
    console.log(this.userForm.controls["name"].value);
    console.log(this.userForm);
	  console.log('Name:' + this.userForm.get('name').value);
	  console.log('Age:' + this.userForm.get('age').value);
	  console.log('City:' + this.userForm.get('city').value);
    console.log('Country:' + this.userForm.get('country').value);
    console.log('Country:' + this.userForm.get('hobbies'));  
  }

  get userName(): any {
        return this.userForm.get('name');
  }

  setDefaultValue() { 
        this.userForm.setValue({name: 'Keyur', age: 30, city: 'Pune', country: 'India',hobbies:['sports']});
  }

  addHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(control);
  }

}

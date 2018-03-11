import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure-component',
  template: '<h1>{{failure}}</h1>',
  styles: ['h1 { color: red; }']
})
export class FailureComponentComponent implements OnInit {

  failure ='Failure';
  constructor() { }

  ngOnInit() {
  }

}

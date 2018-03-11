import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Book } from './../book.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() name : string;
  // @Input() author : string;
  // @Input() price : number;

  name : string;
  author : string;
  price : string;
  book :Book;
  @Output()
  eventEmitter = new EventEmitter<any>();
 
  constructor() { }

  addBookRecord(name : string, author: string, price : string){
    this.book = new Book();
   this.book.name = name;
   this.book.author= author;
   this.book.price = price;
   this.eventEmitter.emit(this.book);
  }


  ngOnInit() {
  }

}

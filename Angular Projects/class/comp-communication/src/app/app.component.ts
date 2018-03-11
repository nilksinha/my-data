import { Component } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameFromParent = 'Nilesh Verma';

  messageArray : string[] =["Hello", "Hi", "Bye"] 
  books : Book[]=[];
  showBookData(book){
    this.books.push(book);      

  }
//   book : Book[] =[{
//     "name" : "java",
//     "author" :"James",
//     "price": 500

//   },
//   {
//     "name" : "Angular",
//     "author" :"Alex",
//     "price": 400

//   },
//   {
//     "name" : "C#",
//     "author" :"Martin",
//     "price": 300

//   }
// ]
}

import { Component, OnInit } from '@angular/core';
import { MarkResult } from './mark-result';

@Component({
  selector: 'app-mark-sheet',
  templateUrl: './mark-sheet.component.html',
  styleUrls: ['./mark-sheet.component.css']
})
export class MarkSheetComponent implements OnInit {

  totalMarks : number;
  percentage : number;
  grade: number;
  enable : boolean = false;
  constructor() { }

  markResult : MarkResult= new MarkResult()
  ngOnInit() {
  }
  showTotalMarks( ){
    this.totalMarks = this.markResult.marks1 + this.markResult.marks2 + this.markResult.marks3 + this.markResult.marks4 + this.markResult.marks5 + this.markResult.marks6; 
  }

  showPercentage(){
    this.totalMarks = this.markResult.marks1 + this.markResult.marks2 + this.markResult.marks3 + this.markResult.marks4 + this.markResult.marks5 + this.markResult.marks6; 
    this.percentage =  this.totalMarks/6;
  }
  showGrade(){
    this.grade = 0;
    this.totalMarks = this.markResult.marks1 + this.markResult.marks2 + this.markResult.marks3 + this.markResult.marks4 + this.markResult.marks5 + this.markResult.marks6; 
    this.grade =  this.totalMarks/6;
  }
}

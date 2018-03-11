import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-grade',
  templateUrl: './calculate-grade.component.html',
  styleUrls: ['./calculate-grade.component.css']
})
export class CalculateGradeComponent implements OnInit {

  grade:string = '';
  constructor() { }

  ngOnInit() {
  }

  findGrade(percentage):void{
    if(percentage >= 70){
      this.grade = "Distinction";
    }else if(percentage >= 60){
      this.grade = "First";
    }else if(percentage >= 50){
      this.grade = "Second";
    }else if(percentage >= 35){
      this.grade = "PASS";
    }else{
      this.grade = "FAIL";
    }
  }
}

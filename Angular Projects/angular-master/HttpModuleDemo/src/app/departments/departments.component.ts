import { Component, OnInit } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from './department.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  deptList : Department [] ;
  statusCode: number;

  requestProcessing = false;
  departmentIdToUpdate = null;
  processValidation = false;

  departmentForm = new FormGroup({
       deptName: new FormControl('', Validators.required)       
   });

  constructor(private departmentService : DepartmentService) { }

  ngOnInit() {
	this.getAllDepartments();
	//this.getAllTempDepartments();
  }

  getAllTempDepartments() {
	  this.departmentService.getAllTempDepartments()
        	  .subscribe(
                (data) => {
					console.log(data.json());	
					this.deptList = data.json();
				},
				(errorCode) => {

				}
			);   
   }

  getAllDepartments() {
	  this.departmentService.getAllDepartments()
        	  .subscribe(
                (data) => this.deptList = data,
                (errorCode) =>  this.statusCode = errorCode);   
   }

   onDepartmentFormSubmit() {
	  this.processValidation = true;   
	  if (this.departmentForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
      this.preProcessConfigurations();
	  let department = this.departmentForm.value;
	  console.log(department);	
	  if (this.departmentIdToUpdate === null) {  
	    //Generate department id then create department
            this.departmentService.getAllDepartments()
	      .subscribe(deptList => {
			 
		   //Generate department id	 
		   let maxIndex = deptList.length - 1;
		   let departmentWithMaxIndex = deptList[maxIndex];
		   let departmentId = departmentWithMaxIndex.id + 1;
		   department.id = departmentId;
		   
		   //Create department
     	           this.departmentService.createDepartment(department)
			  .subscribe(
				  successCode => {
				   this.statusCode = successCode;
				   this.getAllDepartments();	
				   this.backToCreateDepartment();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		
	   } else {  
   	     	//Handle update department
       		department.id = this.departmentIdToUpdate; 		
	     	this.departmentService.updateDepartment(department)
	        	.subscribe(successCode => {
		     	this.statusCode = successCode;
		     	this.getAllDepartments();	
		     	this.backToCreateDepartment();
			},
			errorCode => this.statusCode = errorCode);	  
	   }
   }
	   
   loadDepartmentToEdit(deptId: string) {
      this.preProcessConfigurations();
      this.departmentService.getDepartmentById(deptId)
	   .subscribe(department => {
	            this.departmentIdToUpdate = department.id;   
	            this.departmentForm.setValue({ deptName: department.deptName });
	   	    this.processValidation = true;
		    this.requestProcessing = false;   
	   },
           errorCode =>  this.statusCode = errorCode);   
   }

   deleteDepartment(departmentId: string) {
      this.preProcessConfigurations();
      this.departmentService.deleteArticleById(departmentId)
	      .subscribe(successCode => {
		  //this.statusCode = successCode;
	  	  //Expecting success code 204 from server
		  this.statusCode = 204;
		  this.getAllDepartments();	
		  this.backToCreateDepartment();
		},
		errorCode => this.statusCode = errorCode);    
   }


   preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
   }

  backToCreateDepartment() {
      this.departmentForm.reset();	  
	  this.processValidation = false;
	  this.departmentIdToUpdate = null;
   }

}

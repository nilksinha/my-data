import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable()
export class DepartmentService {

    departmentUrl = "http://localhost:3000/departments";

    constructor(private http:Http) { 
    }
    getAllStaticDepartments():Department[]{
        let deptList = [
            {
                "deptName": "IT",
                "id": 10
            },
            {
                "deptName": "SALES",
                "id": 20
            }
        ];
        return deptList;
    }

    getAllTempDepartments(): Observable<Response> {
        return this.http.get(this.departmentUrl);
    }

    getAllDepartments(): Observable<Department[]> {
        return this.http.get(this.departmentUrl)
	   .map(this.extractData)
	   .catch(this.handleError);
    }

    createDepartment(department: Department): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.departmentUrl,department,options)
        .map(success => success.status)
        .catch(this.handleError);
    }


    //Update article
    updateDepartment(department: Department):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.departmentUrl +"/"+ department.id, department, options)
               .map(success => success.status)
               .catch(this.handleError);
    }

     //Fetch article by id
    getDepartmentById(departmentId: string): Observable<Department> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.departmentUrl +"/"+ departmentId);
        return this.http.get(this.departmentUrl +"/"+ departmentId)
        .map(this.extractData)
        .catch(this.handleError);
    }	

    deleteArticleById(departmentId: string): Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.delete(this.departmentUrl +"/"+ departmentId)
			.map(success => success.status)
				.catch(this.handleError);
    }	

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
       for (let dept of body){
            dept.deptName = (<string>dept.deptName).toLowerCase();
            console.log(dept.deptName);
        }
        return body;
    }
    private handleError (error: Response | any) {
	    console.error(error.message || error);
	    return Observable.throw(error.status);
    }

}
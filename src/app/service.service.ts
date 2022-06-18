import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login, Value,Registration } from './value';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  reg_api="https://nodeprojectapi.herokuapp.com/register";
  login_api="https://nodeprojectapi.herokuapp.com/login";

  token:string;
  constructor(private http:HttpClient, private storage:StorageService) {
this.token=this.storage.getToken();
console.log("token", this.token);
   }
  
  getRegdata(formvalue):Observable<Registration[]>
  {
return this.http.post<Registration[]>(this.reg_api,formvalue);
  }
  getLogindata(loginValue):Observable<Login[]>
  {
return this.http.post<Login[]>(this.login_api,loginValue);
  }
   //registration work//
   Regdata(formvalue):Observable<Registration[]>
{
  return this.http.post<Registration[]>(this.reg_api,formvalue).pipe(catchError(this.errorHandler));
}
   //login api work//
   Logindata(loginValue):Observable<Login[]>
   {
     return this.http.post<Login[]>(this.login_api,loginValue).pipe(catchError(this.errorHandler));
   }
   //errorhandler is user defined function to handle error
   errorHandler(error:HttpErrorResponse)
   {
     return throwError(error);
   }
  }


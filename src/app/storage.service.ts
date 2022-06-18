import { Injectable } from '@angular/core';
import { Login } from './value';
@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }
  setData(firstname:string, lastname:string, adminId:string,token:string)
{
  window.localStorage.setItem('firstname',firstname);
  window.localStorage.setItem('lastname',lastname);
  window.localStorage.setItem('adminId',adminId);
  window.localStorage.setItem('token',token);
}
getData(){
  const allData=[];
  let value={
    firstname:window.localStorage.getItem('firstname'),
    lastname:window.localStorage.getItem('lastname'),
    adminId:window.localStorage.getItem('adminId'),
    token:window.localStorage.getItem('token')
  }
  allData.push(value);
  return allData;
}
getToken(){
  return window.localStorage.getItem('token');
}
getDestroy(){
  return window.localStorage.clear();
}
}

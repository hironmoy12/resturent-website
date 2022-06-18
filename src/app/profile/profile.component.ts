import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  dataValue;
  constructor(private getService:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.dataValue=this.getService.getData();
    console.log(this.dataValue);
  }
  logout(){
    this.getService.getDestroy();
    this.router.navigate(['./Login']);
  }

}

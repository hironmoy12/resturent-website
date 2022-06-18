import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loginData;
  loginvalue;
  errText;
  errMsg;

  constructor(private login:ServiceService,
    private storage:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    
    })
  }
  submit()
  {
    console.log(this.form.value);
    this.loginData=this.form.value;
    this.login.getLogindata(this.loginData).subscribe(Login=>{
      this.loginvalue=Login;
      console.log(this.loginvalue);
         
          alert(this.loginvalue.message);
          this.storage.setData(
            this.loginvalue.data.firstname,
            this.loginvalue.data.lastname,
            this.loginvalue.data.adminId,
            this.loginvalue.data.token);
            this.router.navigate(['/Book a Table']);
      },
      (err)=>{
        this.errText=err;
        console.log("errorMessege",this.errText );
        this.errMsg=this.errText.error.message;
        console.log("messege",this.errMsg);
      })
          
      }
    }

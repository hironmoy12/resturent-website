import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form:FormGroup;
  formData;
  formvalue;
  errText;
  errMsg;
  

  constructor(private http:ServiceService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
    
    })
  }
    Submit()
  {
    console.log(this.form.value);
    this.formvalue=this.form.value;
    this.http.getRegdata(this.formvalue).subscribe(Registration=>{
      this.formData=Registration;
      console.log(this.formData);
    },
      (err)=>{
        this.errText=err;
        console.log("errorMessege",this.errText);
        this.errMsg=this.errText.error.message;
        console.log("messege",this.errMsg);
      }
          )

  }
  }



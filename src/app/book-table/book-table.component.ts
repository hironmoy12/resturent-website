
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  myForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      phone:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.pattern("[^@\s]+@[^@\s]+\.[^@\s]+")]),
  })
}
submit()
{
  console.log(this.myForm.value);
  alert("Booking successfull");
}
}


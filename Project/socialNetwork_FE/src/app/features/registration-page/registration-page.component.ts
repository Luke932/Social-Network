import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{
  registrationForm!: any;

  ngOnInit(): void {
    this.registrationForm=this.createForm();

    
  }

  constructor(
    private fb: FormBuilder
    ){}
  
  createForm(): any {
    return this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      surname:['',[Validators.required,Validators.minLength(3)]],
      dateBirth:['',[Validators.required]],
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }
  get nameForm(){
    return this.registrationForm.get('name')
  }
  get surnameForm(){
    return this.registrationForm.get('surname')
  }
  get ageForm(){
    return this.registrationForm.get('age')
  }
  get emailForm(){
    return this.registrationForm.get('email')
  }
  
  get passwordForm(){
    return this.registrationForm.get('password')
  }
  submitRegistration() {
    console.log(this.registrationForm)
  }
}

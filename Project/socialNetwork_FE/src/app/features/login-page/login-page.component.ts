import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
loginForm!: any;

ngOnInit(): void {
  this.loginForm=this.createForm();
  
}


constructor(
  private fb: FormBuilder
  ){}

createForm(): any {
  return this.fb.group({
    email:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
}

get emailForm(){
  return this.loginForm.get('email')
}

get passwordForm(){
  return this.loginForm.get('password')
}
submitLogin() {
  //TO DO SERVICE
}

}

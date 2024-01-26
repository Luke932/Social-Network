import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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
  private fb: FormBuilder,
  private authService:AuthService
  ){}

createForm(): any {
  return this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
}

get usernameForm(){
  return this.loginForm.get('username')
}

get passwordForm(){
  return this.loginForm.get('password')
}
submitLogin() {
 this.authService.login(this.loginForm?.value).subscribe(res=>{
  console.log(res)
 })
}

}

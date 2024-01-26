import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private fb: FormBuilder,
    private authService:AuthService
    ){}
  
  createForm(): any {
    return this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      nome:['',[Validators.required,Validators.minLength(3)]],
      cognome:['',[Validators.required,Validators.minLength(3)]],
      eta:['',[Validators.required,Validators.min(18),Validators.max(90)]],
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  get usernameForm(){
    return this.registrationForm.get('username')
  }
  get nomeForm(){
    return this.registrationForm.get('nome')
  }
  get cognomeForm(){
    return this.registrationForm.get('cognome')
  }
  get etaForm(){
    return this.registrationForm.get('eta')
  }
  get emailForm(){
    return this.registrationForm.get('email')
  }
  
  get passwordForm(){
    return this.registrationForm.get('password')
  }
  submitRegistration() {
   this.authService.signup(this.registrationForm.value).subscribe(res=>{
    console.log(res)
   })
  }
}

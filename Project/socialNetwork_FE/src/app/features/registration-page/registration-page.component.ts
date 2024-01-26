import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppRoutings } from 'src/app/core/configs/app-routings';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{
  registrationForm!: any;
  public appRouting=AppRoutings;
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
      dataNascita:['',[Validators.required]],
      email:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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
  get dataNascitaForm(){
    return this.registrationForm.get('dataNascita')
  }
  get emailForm(){
    return this.registrationForm.get('email')
  }
  
  get passwordForm(){
    return this.registrationForm.get('password')
  }
  submitRegistration() {
    console.log(this.registrationForm)
   this.authService.signup(this.registrationForm.value).subscribe(res=>{
    console.log(res)
   })
  }
}

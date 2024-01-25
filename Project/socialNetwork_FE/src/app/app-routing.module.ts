import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutings } from './core/configs/app-routings';

const routes: Routes = [{
  path:AppRoutings.loginPage,
  loadChildren: ()=> import('./features/login-page/login-page.module').then(res=>res.LoginPageModule),    //andiamo ad indicare che quando navighiamo in questo path carico questo modulo
  canActivate:[],
  canLoad:[]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutings } from './core/configs/app-routings';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [{
  path:AppRoutings.loginPage,
  loadChildren: ()=> import('./features/login-page/login-page.module').then(res=>res.LoginPageModule),    //andiamo ad indicare che quando navighiamo in questo path carico questo modulo
},{
  path:AppRoutings.registrationPage,
  loadChildren: ()=> import('./features/registration-page/registration-page.module').then(res=>res.RegistrationPageModule),    //andiamo ad indicare che quando navighiamo in questo path carico questo modulo
},{
  path:AppRoutings.postsPage,
  loadChildren: ()=> import('./features/posts/posts.module').then(res=>res.PostsModule),    //andiamo ad indicare che quando navighiamo in questo path carico questo modulo
  canActivate:[AuthGuard],
  canLoad:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

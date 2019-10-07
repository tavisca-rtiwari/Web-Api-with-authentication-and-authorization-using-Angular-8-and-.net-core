import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component'
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AdminComponent} from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'user/login',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'registration',component:RegistrationComponent}
      
    ]
  },
  {path:'forbidden',component:ForbiddenComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

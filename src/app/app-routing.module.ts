import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ResourcePageComponent } from './pages/resource-page/resource-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'users', component: UsersPageComponent },
  { path: 'users/:userId', component: UserDetailPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'resource', component: ResourcePageComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

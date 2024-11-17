import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNameComponent } from './user-name/user-name.component';
import { TestComponent } from './test/test.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'guide-lines',
    component: UserNameComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { CaseRegistrationComponent } from './modules/case-registration/case-registration.component';
import { OngsRegistrationComponent } from './modules/ongs-registration/ongs-registration.component';
import { LoginComponent } from './modules/login/login.component';
import { ListComponent } from './modules/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: OngsRegistrationComponent
  },
  {
    path: 'novo-caso',
    component: CaseRegistrationComponent
  },
  {
    path: '**',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './modules/list/list.component';
import { CaseComponent } from './modules/case/case.component';
import { ProjectComponent } from './modules/project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './modules/login/login.component';
import { OngsRegistrationComponent } from './modules/ongs-registration/ongs-registration.component';
import { CaseRegistrationComponent } from './modules/case-registration/case-registration.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CaseComponent,
    ProjectComponent,
    LoginComponent,
    OngsRegistrationComponent,
    CaseRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

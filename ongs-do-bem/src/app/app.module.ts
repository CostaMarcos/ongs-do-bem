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
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { WellcomeDialogComponent } from './modules/wellcome-dialog/wellcome-dialog.component';
import { DetailsDialogComponent } from './modules/details-dialog/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CaseComponent,
    ProjectComponent,
    LoginComponent,
    OngsRegistrationComponent,
    CaseRegistrationComponent,
    WellcomeDialogComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

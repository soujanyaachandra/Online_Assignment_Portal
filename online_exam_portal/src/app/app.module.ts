import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './user-name/user-name.component';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProgressSectionComponent } from './progress-section/progress-section.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DonutComponent } from './donut/donut.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    HeaderComponent,
    TestComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    ProgressSectionComponent,
    DonutComponent,
    ConfirmPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    CommonModule,
    HttpClientModule,
    HighchartsChartModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

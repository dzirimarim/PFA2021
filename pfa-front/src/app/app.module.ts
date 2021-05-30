import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/register/signin/signin.component';
import { SignupComponent } from './components/register/signup/signup.component';
import { UserProfileComponent } from './components/userManagement/user-profile/user-profile.component';
import { UsersComponent } from './components/userManagement/users/users.component';
import { EditUserComponent } from './components/userManagement/edit-user/edit-user.component';
import { NewTestComponent } from './components/tests/ProgrammingTest/new-test/new-test.component';
import { CreateProgrammingTestComponent } from './components/tests/ProgrammingTest/create-programming-test/create-programming-test.component';
import { TestsComponent } from './components/tests/ProgrammingTest/tests/tests.component';
import { EditProgrammingTestComponent } from './components/tests/ProgrammingTest/edit-programming-test/edit-programming-test.component';
import { CreateQuestionComponent } from './components/tests/qcm/create-question/create-question.component';
import { EditQuestionComponent } from './components/tests/qcm/edit-question/edit-question.component';
import { QuestionsComponent } from './components/tests/qcm/questions/questions.component';
import { AssignComponent } from './components/tests/manageTest/assign/assign.component';
import { ResultsComponent } from './components/tests/manageTest/results/results.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';







import { WelcomeComponent } from './shared/welcome/welcome.component';
import { AuthComponent } from './components/register/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { QcmComponent } from './components/exams/qcm/qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    UsersComponent,
    EditUserComponent,
    NewTestComponent,
    CreateProgrammingTestComponent,
    TestsComponent,
    EditProgrammingTestComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    QuestionsComponent,
    AssignComponent,
    ResultsComponent,
    HeaderComponent,
    WelcomeComponent,
    AuthComponent,
    HomeComponent,
    QcmComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatMenuModule

  ],



  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }

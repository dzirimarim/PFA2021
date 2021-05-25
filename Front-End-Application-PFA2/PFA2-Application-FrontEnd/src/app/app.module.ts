import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, COSTUM_FORMATS } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { QuestionComponent } from './question/question.component';
import {MatSelectModule} from '@angular/material/select';
import { EditQuestionComponent } from './question/edit-question/edit-question.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserComponent } from './users/user/user.component';
import { DialogBoxComponent } from './users/dialog-box/dialog-box.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { QuestionAddComponent } from './question/question-add/question-add.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    ProfileComponent,
    TestComponent,
    HeaderComponent,
    QuestionComponent,
    EditQuestionComponent,
    UserFormComponent,
    UserComponent,
    DialogBoxComponent,
    UserEditComponent,
    QuestionAddComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule , 
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule , 
    MatDatepickerModule ,
    MatNativeDateModule ,
    MatToolbarModule ,
    MatChipsModule , 
    MatTableModule ,
    MatPaginatorModule ,
    MatSelectModule ,
    MatDividerModule ,
    MatAutocompleteModule,
    MomentDateModule ,
  ],
  providers: [
    
    {provide: MAT_DATE_FORMATS, useValue: COSTUM_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

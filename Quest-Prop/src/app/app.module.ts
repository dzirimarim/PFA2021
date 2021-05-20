import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatGridListModule} from '@angular/material/grid-list';

import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { QuestionsAddComponent } from './questions/questions-add/questions-add.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PropositionAddComponent } from './proposition-add/proposition-add.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditQuestionsComponent } from './questions/edit-questions/edit-questions.component';
import {MatDividerModule} from '@angular/material/divider';
import { ManagerComponent } from './manager/manager.component';
import { RegisterUserComponent } from './register-user/register-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    LoginRegComponent,
    QuestionsAddComponent,
    PropositionAddComponent,
    QuestionsComponent,
    UsersComponent,
    UserComponent,
    TestComponent,
    LoginComponent,
    EditUserComponent,
    UserDetailComponent,
    EditQuestionsComponent,
    ManagerComponent,
    RegisterUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatNativeDateModule ,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    FlexLayoutModule , 
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule,
    MatDatepickerModule ,
    MatChipsModule ,
    MatSlideToggleModule,
    MatPaginatorModule, 
    MatAutocompleteModule, 
    MatDividerModule , 
    ReactiveFormsModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

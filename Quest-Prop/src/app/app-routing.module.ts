import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LoginComponent } from './login/login.component';
import { PropositionAddComponent } from './proposition-add/proposition-add.component';
import { QuestionsAddComponent } from './questions/questions-add/questions-add.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'friends', component: FriendComponent},
  {path: '', component: AppComponent},
  {path: 'sign', component: LoginRegComponent },
  {path: 'qAdd', component: QuestionsAddComponent},
  {path: 'qList', component: QuestionsComponent},
  {path: 'pAdd', component: PropositionAddComponent},
  {path: 'tAdd', component: TestComponent},
  {path: 'register', component: RegisterUserComponent},
  {path : '',  component : HomeComponent },  
  {path : 'login', component : LoginComponent }, 
  {path : 'users', component : UsersComponent },  




  
];
/* {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path:'exam',
    component:ExamComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'exam/:id',
    component:ExamComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'submit',
    component:  SubmitCodeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'addNewTopic',
    component:TopicComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'examtype2',
    component:ExamByQuestionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'examtype2/:id',
    component:ExamByQuestionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'candidatStatistics',
    component:CondidatStatisticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'createQuestions',
    component:CreateQuestionsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'createNxTest',
    component:AssignExamComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'tester',
    component:TestComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'exams',
    component: MyExamsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'createTest',
    component: CreateTestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'testslist/:id',
    component: EditExamComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'testslist',
    component:ListOfExamsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'signup',
    component: RegisterUserComponent,
  },
  {
    path:'manageusers',
    component: ManageUsersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'managequestions',
    component : ManageQuestionsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'me',
    component:MeComponent,
    canActivate:[AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' } */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

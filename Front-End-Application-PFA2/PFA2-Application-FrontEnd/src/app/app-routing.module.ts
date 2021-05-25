import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditQuestionComponent } from './question/edit-question/edit-question.component';
import { QuestionAddComponent } from './question/question-add/question-add.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './users/user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  } , 
  {
    path: "quest",
    component: QuestionComponent
  } ,
  {
    path: "questAdd",
    component: QuestionAddComponent
  } , 
  {
    path: "test",
    component: TestComponent
  } , 
  {
    path: "users",
    component: UserComponent
  } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

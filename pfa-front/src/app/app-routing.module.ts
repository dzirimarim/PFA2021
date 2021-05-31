import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QcmComponent } from './components/exams/qcm/qcm.component';
import { HomeComponent } from './components/home/home.component';
import { CreateProgrammingTestComponent } from './components/tests/ProgrammingTest/create-programming-test/create-programming-test.component';
import { SubmitComponent } from './components/tests/ProgrammingTest/submit/submit.component';
import { CreateQuestionComponent } from './components/tests/qcm/create-question/create-question.component';
import { EditQuestionComponent } from './components/tests/qcm/edit-question/edit-question.component';
import { NewTestComponent } from './components/tests/qcm/new-test/new-test.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  
  {
    path: "submit",
    component: SubmitComponent
  },
  {
    path: "createAlgo",
    component: CreateProgrammingTestComponent
  },
  {
    path: "createQcm",
    component: NewTestComponent
  },
  {
    path: "questions",
    component: QcmComponent
  },
  {
    path: "questions/edit",
    component: EditQuestionComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

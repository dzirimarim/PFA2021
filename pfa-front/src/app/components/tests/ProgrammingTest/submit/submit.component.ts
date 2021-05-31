import { Component, Input, OnInit } from '@angular/core';
import { AlgoService } from 'src/app/services/algo.service';
import { FormGroup, FormBuilder, RequiredValidator, FormControl, Validators } from '@angular/forms';
import { ResponsesService } from 'src/app/services/responses.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  @Input() coId:number = -1;
  languages?: any
  problems?: any
  contests?: any

  submissionResult?: any
  error?: any
  submitForm?: any
  contest?: any
  fg?: FormGroup
  constructor(private fb: FormBuilder, private domjudge: AlgoService, private nxTResponse: ResultsService) {

  }

  ngOnInit() {
    this.fg = this.fb.group({
      problem: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      cid: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    })
    this.domjudge.getAllContests().subscribe((res: any) => {
      this.contests = res
      console.log(res)

    },
      (error: any) => {
        this.error = error
        console.log(error)
      })

    this.domjudge.getContestProblems(this.coId).subscribe((res: any) => {
      this.problems = res
      console.log(res)

    },
      (error: any) => {
        this.error = error
        console.log(error)
      })

    this.domjudge.getContestAllLanguages(this.coId).subscribe((res: any) => {
      this.languages = res
      console.log(res)

    },
      (error: any) => {
        this.error = error
        console.log(error)
      })
  }



  code?: File

  handleFileInput(files: any) {
    files = files.target.files
    const formdata: FormData = new FormData();
    this.code = <File>files.item(0);
    //formdata.append('problem',this.fg.controls.problem.value)
    if (!this.fg) {
      this.fg = this.fb.group({
        problem: new FormControl('', Validators.required),
        language: new FormControl('', Validators.required),
        cid: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required)
      })
    }

    console.log("form=> " + JSON.stringify(formdata.getAll('code[]')))
    this.fg.controls.code.setValue(files.item(0))
    console.log("problem fomr=> " + JSON.stringify(formdata.get('code[]')))
    console.log((this.fg.controls.code.value))
    console.log("language=> " + this.fg.controls.language.value)
    console.log("problem=> " + this.fg.controls.problem.value)
    console.log("cid=> " + this.fg.controls.cid.value)
    console.log(this.fg.status)

  }
  onSubmit() {
    if (!this.fg) {
      this.fg = this.fb.group({
        problem: new FormControl('', Validators.required),
        language: new FormControl('', Validators.required),
        cid: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required)
      })
    }

    const formdata: FormData = new FormData();
    formdata.append('code[]', this.code ? this.code : '');
    formdata.append('problem', this.fg.controls.problem.value);
    formdata.append('language', this.fg.controls.language.value);
    console.log(JSON.stringify(this.fg.controls.code.value))
    console.log(this.fg.controls.language.value)
    console.log(this.fg.controls.problem.value)
    console.log(this.fg.controls.cid.value)
    console.log(this.fg.status)

    this.domjudge.submission(formdata, this.fg.controls.cid.value).subscribe((res: any) => {
      this.submissionResult = res
      this.nxTResponse.submission(this.fg ? this.fg.controls.problem.value : '', this.submissionResult).subscribe((res: any) => {
      })
    },
      (error: any) => {
        this.error = error
      })
  }

}




interface submission {
  cid: string
  problem: string
  code: FormData
  language: string
}
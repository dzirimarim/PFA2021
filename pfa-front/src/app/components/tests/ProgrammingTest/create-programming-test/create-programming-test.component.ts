import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlgoService } from 'src/app/services/algo.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-create-programming-test',
  templateUrl: './create-programming-test.component.html',
  styleUrls: ['./create-programming-test.component.scss']
})
export class CreateProgrammingTestComponent implements OnInit {

  contests?: any;
  fg?: FormGroup
  problem?: File;
  output?: File;
  input?: File;
  submissionResult: any = "";
  error: any;
  constructor(private fb: FormBuilder, private domjudge: AlgoService, private nxTResponse: ResultsService) {
    this.ini()

    this.domjudge.getAllContests().subscribe((res: any) => {
      console.log(res)
      this.contests = res;
    })
  }

  ini() {
    this.fg = this.fb.group({
      contest: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      discription: new FormControl('', Validators.required),
      level: new FormControl(0),
      problemContent: new FormControl('', Validators.required),
      input: new FormControl('', Validators.required),
      output: new FormControl('', Validators.required),
    })
  }
  handleFileProblem(event: any) {
    event = event.target.files
    const formdata: FormData = new FormData();
    this.problem = <File>event.item(0);
    //formdata.append('problem',this.fg.controls.problem.value)
    if (!this.fg) {
      this.fg = this.fb.group({
        contest: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        discription: new FormControl('', Validators.required),
        level: new FormControl(0),
        problemContent: new FormControl('', Validators.required),
        input: new FormControl('', Validators.required),
        output: new FormControl('', Validators.required),
      })
    }

    console.log("form=> " + JSON.stringify(formdata.getAll('code[]')))
    this.fg.controls.problemContent.setValue(event.item(0))
    console.log("problem fomr=> " + JSON.stringify(formdata.get('code[]')))
    console.log((this.fg.controls.problemContent.value))
    console.log("input=> " + this.fg.controls.input.value)
    console.log("problem=> " + this.fg.controls.problemContent.value)
    console.log("cid=> " + this.fg.controls.level.value)
    console.log(this.fg.status)
  }

  handleFileOutput(event: any) {
    event = event.target.files
    const formdata: FormData = new FormData();
    this.output = <File>event.item(0);
    
    //formdata.append('problem',this.fg.controls.problem.value)
    if (!this.fg) {
      this.fg = this.fb.group({
        contest: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        discription: new FormControl('', Validators.required),
        level: new FormControl(0),
        problemContent: new FormControl('', Validators.required),
        input: new FormControl('', Validators.required),
        output: new FormControl('', Validators.required),
      })
    }

   
    this.fg.controls.output.setValue(event.item(0))
   
  /*  console.log((this.fg.controls.code.value))
    console.log("language=> " + this.fg.controls.language.value)
    console.log("problem=> " + this.fg.controls.problem.value)
    console.log("cid=> " + this.fg.controls.cid.value)
    console.log(this.fg.status)*/
  }
  handleFileInput(event: any) {
    event = event.target.files
    const formdata: FormData = new FormData();
    this.input = <File>event.item(0);
    //formdata.append('problem',this.fg.controls.problem.value)
    if (!this.fg) {
      this.fg = this.fb.group({
        contest: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        discription: new FormControl('', Validators.required),
        level: new FormControl(0),
        problemContent: new FormControl('', Validators.required),
        input: new FormControl('', Validators.required),
        output: new FormControl('', Validators.required),
      })
    }

   
     this.fg.controls.input.setValue(event.item(0))
    /*console.log("problem fomr=> " + JSON.stringify(formdata.get('code[]')))
    console.log((this.fg.controls.code.value))
    console.log("language=> " + this.fg.controls.language.value)
    console.log("problem=> " + this.fg.controls.problem.value)
    console.log("cid=> " + this.fg.controls.cid.value)
    console.log(this.fg.status) */
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.fg) {
      this.fg = this.fb.group({
        contest: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        discription: new FormControl('', Validators.required),
        level: new FormControl(0),
        problemContent: new FormControl('', Validators.required),
        input: new FormControl('', Validators.required),
        output: new FormControl('', Validators.required),
      })
    }


    const formdata: FormData = new FormData();
    formdata.append("problemContent", this.problem ? this.problem : new File([''], "nan"));
    formdata.append('input', this.input ?  this.input : new File([''], "nan"));
    formdata.append('output', this.output ? this.output : new File([''], "nan"));
    formdata.append('code', this.fg.controls.code.value);
    formdata.append('discription', this.fg.controls.discription.value);
    formdata.append('level', this.fg.controls.level.value);
    formdata.append('contest', this.fg.controls.contest.value);
    console.log(JSON.stringify(this.fg.controls.code.value))
    console.log(this.fg.controls.code.value)
    console.log(this.fg.controls.problemContent.value)
    console.log(this.fg.controls.code.value)
    console.log(this.fg.status)
    this.domjudge.addNewProblem(formdata).subscribe((res: any) => {
      this.submissionResult = res
      })
    formdata.forEach(e=>{
      console.log(e)
    })
   /* this.domjudge.submission(formdata, this.fg.controls.cid.value).subscribe((res: any) => {
      this.submissionResult = res
      this.nxTResponse.submission(this.fg ? this.fg.controls.problem.value : '', this.submissionResult).subscribe((res: any) => {
      })
    },
      (error: any) => {
        this.error = error
      }) */
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proposition-add',
  templateUrl: './proposition-add.component.html',
  styleUrls: ['./proposition-add.component.scss']
})
export class PropositionAddComponent implements OnInit {

  orderForm!: FormGroup;
  items!: FormArray;

  get item () {
    return this.orderForm.get('items') as FormArray
  } 
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      enonce: [''],
      proposition :[''],
      isTrue: [null],
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      proposition: [''],
      enonce:[''],
     isTrue: ['']
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeContact(index : any) {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(index);
  }
  submit() {
    console.log(this.orderForm.value);
    console.log(this.items);

  }

}

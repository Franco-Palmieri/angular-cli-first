import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Pippo: string[] = ['ciccio', 'coso'];
  
  money: number;
  
  selectField: FormControl = new FormControl();

  form: FormGroup;


  constructor(public fb: FormBuilder) { 

    let money1 = 5;
    let money2 = 10;
    this.money = this.sum(money1, money2)
    console.log(this.money);

    this.form = fb.group({
      'number1': ['',],
      'number2': ['',],
    })
    
  }

  ngOnInit(): void {
  }

  send(){ 
    let result = this.sum(this.form.controls['number1'].value, this.form.controls['number2'].value);  
    console.log(result) 
  }


  sum(n1: number, n2:number):number{
      return n1 + n2;
  }

}

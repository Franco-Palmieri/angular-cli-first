import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: Date;
  color: string = 'black'
  
  @ViewChild ('about', {static: false}) aboutElement: ElementRef;
  constructor() { 

    this.today = new Date();
  }
  ngOnInit(): void {
  }

  printElement(){
    console.log(this.aboutElement.nativeElement)
  }

  hello(field: HTMLSelectElement){
    if(field.value == '1'){
      this.color = 'blue'
    }else if(field.value == '2'){
      this.color = ' red'
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})

export class SinglecardComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
  }
}

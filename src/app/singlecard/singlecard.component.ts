import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})

export class SinglecardComponent implements OnInit {
  id: number;
  title: string;

  constructor(public route: ActivatedRoute) {
      this.route.paramMap.subscribe((params: ParamMap)=>{
      this.title = params.get('id')
     })

   }

  ngOnInit(): void {
    
  }
}

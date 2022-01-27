import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})

export class SinglecardComponent implements OnInit {

  postID: string;
  post: any;

  constructor(public route: ActivatedRoute, public http: HttpClient) {
      this.route.paramMap.subscribe((params: ParamMap)=>{
      this.postID = params.get('id')
     })
     this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.postID).subscribe(res =>{
      this.post = res
     })


   }

  ngOnInit(): void {
  }

}

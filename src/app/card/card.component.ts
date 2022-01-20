import { HttpClient } from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { singlePost } from '../models/singlepost.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  loading: Boolean = false;

  posts: Post[] = new Array();

  post: singlePost;
  //posts: Array<Post> = new Array();

  constructor(public http: HttpClient) {

   }

  /*Fa la chiamata e sottoscrive all'observable che mi ritorna come risposta, una callback, che si attiva solo quando
  l'observable riceve la risposta e con il metodo subscribe va ad attivare la callback
  
  ngOnInit(): void {
    this.loadMeals().subscribe(this.callback);
  }
  
  //observable: tipologia di oggetto che fa la chiamata http e attende una risposta

  loadMeals(): Observable<Object>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  }

  callback = (res : any ) => {
    console.log(res)
  }


  Avvio il componente, viene chiamato l'ngOnInit() che chiama il loadMeals(),
  il loadMeals fa la richiesta HTTP e ritorna come risultato un observable che è in attesa di una risposta http,
  dopo di che sottoscrivo una funzione chiamata CALLBACK(), 
  solo nel momento in cui questo observable che è rimasto in standby attendendo la risposta riceve la risposta dalla
  chiamata http, allora richiama quella callback che è stata sottoscritta col metodo subscribe(),
  quella callback prenderà nel "res" la risposta quindi i dati che sono arrivati da http li stamperà nella console con
  il console.log
 */

  ngOnInit(): void {
    this.loadMeals();
    this.loadId(1);
  }
  loadMeals():void{
    this.loading = true;
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(res =>{
      this.posts = res;
      // console.log(this.posts)
      this.loading = false;
    });
  }

  loadId(id: Number):void{
    this.loading = true;
    this.http.get<singlePost>('https://jsonplaceholder.typicode.com/posts/'+id).subscribe(res =>{
      console.log('questo è loadId', res)
      this.post = res;
      this.loading = false;
    });
  }
  createPost(ID: Number, USERID: Number, TITLE: string, BODY: string){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: USERID,
      id: ID,
      title: TITLE,
      body: BODY
    }).subscribe(res =>{
      console.log(res)
    })
  }
}

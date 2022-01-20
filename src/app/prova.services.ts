import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from './models/post.model'

@Injectable({
    providedIn: 'root'
})

export class provaService{

    constructor(public http: HttpClient){

    }
    downloadPosts(): Observable<Post[]>{
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
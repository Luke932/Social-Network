import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/core/configs/app-configs';
import { Post } from 'src/app/core/models/post.interface';

@Injectable()
export class PostService {

  constructor( private httpClient: HttpClient, private appConfig: AppConfig ) {  }

  public getAllPosts():Observable<Post[]>{
    
    return this.httpClient
    .get<Post[]>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.posts.baseUrl}`);
  }

  public addPost(post:Post):Observable<Post[]>{
    
    return this.httpClient
    .post<Post[]>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.posts.baseUrl}`,post);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl : string = environment.apiUrl;

  selectedPost:Post | undefined;
  constructor(private http: HttpClient) {}

  setPost(post:Post){
    this.selectedPost = post;
  }

  getPost(){
    return this.selectedPost;
  }

  getAll(){
    return this.http.get(this.apiUrl+"/posts");
  }

  getFind(Id:Number){
    return this.http.get(this.apiUrl+"/posts/"+Id);
  }

  post(post:FormData){
    return this.http.post(this.apiUrl+'/posts',post);
  }
  
  put(post:Post){
    return this.http.put(this.apiUrl+'/posts',post);
  }

  delete(post:Post){
    return this.http.delete(this.apiUrl+'/posts/'+post.id);
  }
}

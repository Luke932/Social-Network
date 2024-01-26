import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{

  @Input() public post!:Post;

  constructor(){}

  
}

import { Component, Inject, OnInit } from '@angular/core';
import { Post } from '../../core/models/post.interface';
import { PostService } from './services/post.service';
import { AppRoutings } from 'src/app/core/configs/app-routings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  public posts:Post[]=[];
  public appRoutings=AppRoutings;
  constructor(
    private postService: PostService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((res:Post[])=>{
      this.posts=res;
    })
  }

  naivgate() {
    this.router.navigate(['/home/addPost'])
    }
  }
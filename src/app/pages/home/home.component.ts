import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.postService.getPosts().subscribe((res: any) => {
      this.posts = [...res]
      console.log(res);
      
    })
    
  }
}

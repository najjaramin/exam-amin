import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from '../../services/post';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostItem],
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostList implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}

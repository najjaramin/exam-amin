import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post, PostService } from '../../services/post.service';

interface PostWithState extends Post {
  isOpen: boolean;
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './post-list.html'
})
export class PostList implements OnInit {
  posts: PostWithState[] = [];
  error: string | null = null;
  loading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.error = null;
    
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts.map((post, index) => ({
          ...post,
          // Le premier post est ouvert par défaut (index === 0)
          isOpen: index === 0
        }));
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des posts :', error);
        this.error = 'Impossible de charger les articles. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    });
  }

  togglePost(index: number): void {
    this.posts = this.posts.map((post, i) => ({
      ...post,
      isOpen: i === index ? !post.isOpen : false
    }));
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <div class="card mb-3">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">{{ post.titre }}</h5>
        <span class="badge bg-secondary">Post #{{ post.id }}</span>
      </div>
      <div class="card-body">
        <p class="card-text">{{ post.contenu }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">
            <i class="bi bi-person"></i> {{ post.auteur }}
          </small>
          <small class="text-muted">
            <i class="bi bi-calendar"></i> {{ post.date | date:'dd/MM/yyyy' }}
          </small>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
    }
    .card-header {
      background-color: #f8f9fa;
      border-bottom: 1px solid rgba(0,0,0,0.125);
    }
  `]
})
export class PostItem {
  @Input() post!: Post;
}

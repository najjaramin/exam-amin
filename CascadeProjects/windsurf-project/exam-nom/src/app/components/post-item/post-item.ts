import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-item.html',
  styleUrls: ['./post-item.scss']
})
export class PostItem {
  @Input() post!: Post;
}

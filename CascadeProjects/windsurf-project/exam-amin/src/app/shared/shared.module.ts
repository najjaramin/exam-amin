import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../services/post.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class SharedModule { }

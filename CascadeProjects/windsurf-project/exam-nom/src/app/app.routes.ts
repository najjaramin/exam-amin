import { Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostList },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '/posts' }
];

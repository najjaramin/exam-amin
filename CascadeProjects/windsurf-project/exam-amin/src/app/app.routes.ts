import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'posts', 
    pathMatch: 'full' 
  },
  { 
    path: 'posts', 
    loadComponent: () => import('./components/post-list/post-list')
      .then(m => m.PostList),
    title: 'Liste des articles'
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./components/post-item/post-item')
      .then(m => m.PostItem),
    title: 'Détails de l\'article'
  },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login')
      .then(m => m.Login),
    title: 'Connexion'
  },
  { 
    path: '**', 
    redirectTo: 'posts' 
  }
];

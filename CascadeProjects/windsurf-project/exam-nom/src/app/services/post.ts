import { Injectable } from '@angular/core';

export interface Post {
  id: string;
  titre: string;
  contenu: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postList: Post[] = [
    { 'id': '1', 'titre': "Premier post", 'contenu': 'détails premier post' },
    { 'id': '2', 'titre': "Deuxième post", 'contenu': 'détails deuxième post' },
    { 'id': '3', 'titre': "Troisième post", 'contenu': 'détails troisième post' },
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.postList;
  }
}

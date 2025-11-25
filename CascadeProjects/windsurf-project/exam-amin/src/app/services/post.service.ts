import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id?: string; // Optionnel car généré côté serveur
  titre: string;
  contenu: string;
  auteur: string;
  date: string;
  note?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/api'; // URL de base de l'API backend
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Récupérer tous les posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  // Récupérer un post par son ID
  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
  }

  // Créer un nouveau post
  createPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post, this.httpOptions);
  }

  // Mettre à jour un post existant
  updatePost(id: string, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/posts/${id}`, post, this.httpOptions);
  }

  // Supprimer un post
  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/posts/${id}`);
  }

  // Récupérer les posts par auteur
  getPostsByAuthor(author: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?author=${encodeURIComponent(author)}`);
  }
}

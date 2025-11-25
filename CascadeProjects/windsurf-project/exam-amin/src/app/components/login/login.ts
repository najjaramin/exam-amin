import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h2 class="text-center mb-0">Page de Connexion</h2>
            </div>
            <div class="card-body text-center p-5">
              <h3 class="mb-4">Login Page</h3>
              <p class="lead">
                Cette page est en cours de développement.
                <br>
                La fonctionnalité de connexion sera disponible prochainement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .card {
      border: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }
    .card-header {
      padding: 1.5rem;
    }
    .card-body {
      padding: 3rem 2rem;
    }
    h3 {
      color: #0d6efd;
      font-weight: 600;
    }
    `
  ]
})
export class Login {
}

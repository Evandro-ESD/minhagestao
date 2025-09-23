import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  testeRota = [];

  http = inject(HttpClient);

  getTeste(): void {
    this.http.get<any>(environment.apiUrlHealth).subscribe({
      next: (res) => {
        this.testeRota = res; // agora armazena o array retornado
        console.log('Dados recebidos:', this.testeRota);
      },
      error: (err) => {
        console.error('Erro na API:', err);
      },
    });
  }

  getProfile(): void {
    this.http.get<any>(environment.profile).subscribe({
      next: (res) => console.log('Profile:', res),
      error: (err) => console.error('Erro no Profile:', err),
    });
  }
}

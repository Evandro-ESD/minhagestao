import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SaasService {
  constructor() {}
  authService = inject(AuthService);

  registerUser() {
    return this.authService.register();
  }
}

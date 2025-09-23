import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  teste = inject(AuthService);

  rota: any;

  private apiUrl = environment.apiUrlHealth;

  ngOnInit(): void {
    this.teste.getTeste();
    console.log('--------------');
    // this.teste.getProfile();
  }

  get() {
    console.log('OI----');
  }
}

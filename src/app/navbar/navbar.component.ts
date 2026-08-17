import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonMenu,
    IonContent,
    IonList,
    IonLabel,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  email!: string;
  password!: string;
  authService = inject(AuthService);
  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  signOut() {
    this.authService
      .signOut()
      .then(() => (this.authService.user = null))
      .catch((e: any) => console.log(e.message));
  }
}

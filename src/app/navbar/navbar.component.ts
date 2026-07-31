import { Component, Inject } from '@angular/core';
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
    IonRouterOutlet,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public authservice: AuthService) {}
  logOut() {
    this.authservice.isLoggedIn = false;
  }
}

import { Component } from '@angular/core';
import { Credential } from '../credential';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class RegisterComponent {
  credentials: Credential[];

  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {
    this.credentials = [];
  }
  onSubmit(data: Credential, valid: boolean | null) {
    this.authservice
      .signUp(data.username, data.password)
      .then(() => {
        this.router.navigate(['/regform']);
      })
      .catch(() => {
        console.log(`Rekisteröityminen epäonnistui`);
      });
  }
}

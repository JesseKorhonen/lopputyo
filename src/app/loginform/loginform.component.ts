import { Component, OnInit, Inject } from '@angular/core';
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
  selector: 'app-loginform',
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
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent {
  // credentials muuttuja joka saa interfacelle menevät arvot
  credentials: Credential[];
  err: boolean = false;
  // Constructori jossa määritellään, että credentialmuuttuja on tyhjä ja että serviceja reititys ovat privaatteja
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {
    this.credentials = [];
  }
  // tietojen lähettämisen funktio, joka saa arvokseen lähetettävän datan, ja velidaation
  onSubmit(data: Credential, valid: boolean | null) {
    // tehdään validaatio lähetettävälle tiedolle
    if (valid) {
      // tarkistetaan, ovatko käyttäjä tunnus ja salasana oikeat, ja jos ovat kirjaudutaan sisään
      this.authservice
        .signIn(data.username, data.password)
        .then(() => {
          this.router.navigate(['/regform']);
        })
        .catch(() => {
          this.err = true;
        });
    }
    // tulostetaan teksti jos kirjautuminen epäonnistui
    else {
      console.log(`Kirjautuminen epäonnistui`);
    }
  }
}

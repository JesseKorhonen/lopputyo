import { Component, OnInit, Inject } from '@angular/core';
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
import { Credential } from '../credential';
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
  // Constructori jossa määritellään, että credentialmuuttuja on tyhjä ja että serviceja reititys ovat privaatteja
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {
    this.credentials = [];
  }
  // määritellään lomakkkeen alkutilanne kun se ladataan alkutilanteessa lomakkeella ei ole käyttäjätunnusta tai salasanaa syötettynä
  ngOnInit() {
    this.getCreds();
  }
  // tietojen lähettämisen funktio, joka saa arvokseen lähetettävän datan, ja velidaation
  onSubmit(data: Credential, valid: boolean | null) {
    // tehdään validaatio lähetettävälle tiedolle
    if (valid) {
      // tarkistetaan, ovatko käyttäjä tunnus ja salasana oikeat, ja jos ovat kirjaudutaan sisään
      if (
        data.username === this.credentials[0].username &&
        data.password === this.credentials[0].password
      ) {
        this.router.navigate(['/regform']);
        this.authservice.isLoggedIn = true;
      }
      // tulostetaan teksti jos kirjautuminen epäonnistui
    } else {
      console.log(`Kirjautuminen epäonnistui`);
    }
  }
  // funktio joka hakee käyttäjätunnuksen ja salasanan
  getCreds() {
    this.authservice
      .getCreds()
      .subscribe((creds) => (this.credentials = creds));
  }
}

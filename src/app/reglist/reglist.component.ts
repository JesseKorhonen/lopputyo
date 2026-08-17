import { Component, OnInit, inject, Inject, Injectable } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { RegService } from '../reg.service';
import { Registration } from '../registration';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-reglist',
  templateUrl: 'reglist.component.html',
  styleUrls: ['reglist.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButton,
  ],
})
export class ReglistComponent {
  // muuttuja johon tallennetaan tulostettavat tiedot muuttuja on tyypitetty interfacella
  registrations: Registration[] = [];
  // constructori jossa otetaan service käyttöön
  constructor(public regService: RegService) {}
  authService = inject(AuthService);

  ionViewWillEnter() {
    this.regService.getRegistrations().subscribe({
      // jos saadaan haettua tiedot suoritetaan next, jossa tiedot tallennetaan registrations muuttujaan
      next: (data) => {
        this.registrations = data;
      },
      // tehdään virheenkäsittely
      error: (error) => {
        // tulostetaan error konsoliin
        console.error(error);
      },
    });
  }
  remove(c: Registration) {
    this.registrations = this.registrations.filter(
      (registrations) => registrations !== c,
    );
    this.regService.removeReg(c.id).then();
  }
}

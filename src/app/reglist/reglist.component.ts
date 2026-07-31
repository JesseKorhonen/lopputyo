import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { RegService } from '../reg.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-reglist',
  templateUrl: 'reglist.component.html',
  styleUrls: ['reglist.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem],
})
export class ReglistComponent {
  // muuttuja johon tallennetaan tulostettavat tiedot muuttuja on tyypitetty interfacella
  registrations: Registration[] = [];
  // constructori jossa otetaan service käyttöön
  constructor(public regService: RegService) {}
  // oninit haetaan ilmoittautuneet käyttäjät
  ionViewWillEnter() {
    this.regService.getRegistrations().subscribe({
      // jos saadaan haettua tiedot suoritetaan next, jossa tiedot tallennetaan registrations muuttujaan
      next: (data) => {
        this.registrations = data;
        // tulostetaan ensimmäinen alkio konsoliin debuggausta varten tämä consolelog on valmiissa koodissa turha
        console.log(this.registrations[0]);
      },
      // tehdään virheenkäsittely
      error: (error) => {
        // tulostetaan error konsoliin
        console.error(error);
      },
    });
  }
}

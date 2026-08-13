import { Component, Inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { RegService } from '../reg.service';
import { Registration } from '../registration';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regform',
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonInput,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonButton,
  ],
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss'],
})
export class RegformComponent {
  constructor(
    private router: Router,
    private regservice: RegService,
    private authService: AuthService,
  ) {}
  onSubmit(data: any) {
    if (data.sauna) {
      data.sauna = 'Osallistun';
    } else {
      data.sauna = 'En osallistu';
    }

    this.regservice.postRegistrations(data as Registration).subscribe();
  }
  navigate() {
    this.router.navigate(['/reglist']);
  }
}

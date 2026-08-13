// servise ilmoittautuneen käyttäjän lisäämiseen ja hakemiseen
import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';
// tuodaan interface
import { Registration } from './registration';
import { AuthService } from './auth.service';

import { from, Observable } from 'rxjs';
// Määritellään injectablessa, että serviceä voidaan käyttää koko sovelluksessa
@Injectable({
  providedIn: 'root',
})
export class RegService {
  private firestore: Firestore = inject(Firestore);
  authService = inject(AuthService);
  postRegistrations(data: Registration): Observable<any> {
    const user = this.authService.user;
    const userData = {
      ...data,
      userId: user?.uid,
    };
    const regRef = collection(this.firestore, 'reg');
    return from(addDoc(regRef, userData));
  }
  getRegistrations(): Observable<Registration[]> {
    const regRef = collection(this.firestore, 'reg');
    return collectionData(regRef, { idField: 'id' }) as Observable<
      Registration[]
    >;
  }
  removeReg(id: string) {
    const regRef = doc(this.firestore, 'reg');
    return deleteDoc(regRef);
  }
}

// Tuodaan Injectable
import { Injectable } from '@angular/core';
// Tuodaan interface
import { Credential } from './credential';
// Tuodaan observable tietojenkäsittelyä varten
import { Observable } from 'rxjs';
// Tuodaan HttpClient http pyyntöjen http pyyntöjä varten
import { HttpClient } from '@angular/common/http';
// Määritellään injectablella, että service on käytössä koko sovelluksessa
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // määritellään osoite kirjautumistietojen hakemiseen
  private apiUrl = 'api/creds';
  // isLoggedIn muuttuja joka kertoo onko käyttäjä kirjautunut vai ei
  isLoggedIn: Boolean;
  // liitetään httpclient
  constructor(private http: HttpClient) {
    // määritellään isLoggedIn muuttujan arvo aluksi false, kun sovellus käynnistyy
    this.isLoggedIn = false;
  }
  // haetaan kirjautumistiedot
  getCreds(): Observable<Credential[]> {
    return this.http.get<Credential[]>(this.apiUrl);
  }
}

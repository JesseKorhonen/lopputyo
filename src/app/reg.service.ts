// servise ilmoittautuneen käyttäjän lisäämiseen ja hakemiseen
// Tuodaan Injectable servicen injectointiin
import { Injectable } from '@angular/core';
// tuodaan interface
import { Registration } from './registration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Määritellään injectablessa, että serviceä voidaan käyttää koko sovelluksessa
@Injectable({
  providedIn: 'root',
})
export class RegService {
  // määritellään apiurli
  private apiUrl = 'api/regs';
  // määritellään httpn asetuksia siten, että tieto tulee json muodossa
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  // otetaan httpclient käyttöön
  constructor(private http: HttpClient) {}
  // metodi rekisteröinnin lisäämiseen
  postRegistrations(data: Registration): Observable<Registration> {
    console.log(data);
    return this.http.post<Registration>(this.apiUrl, data, this.httpOptions);
  }
  // metodi kaikkien ilmoittautumisten hakemiseen
  getRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.apiUrl);
  }
}

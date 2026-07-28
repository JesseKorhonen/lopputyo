// tuodaan inject
import { inject } from '@angular/core';
// tuodaan reititys
import { Router } from '@angular/router';
// tuodaan service
import { AuthService } from '../auth.service';
export function loginGuard(): boolean {
  // tarkistetaan onko käyttäjä kirjautunut, ja jos on päästetään käyttäjä eteenpäin
  if (inject(AuthService).isLoggedIn) {
    return true;
    // näytetään teksti jos käyttäjä ei ole kirjautunut
  } else {
    // teksti joka tulostetaan jos käyttäjä ei ole kirjautunut
    window.alert(
      "LoginGuard: The user is not logged in and can't navigate to OtherComponent",
    );
    // ohjataan käyttäjä kirjautumislomakkeelle
    inject(Router).navigate(['./loginform']);
    return false;
  }
}

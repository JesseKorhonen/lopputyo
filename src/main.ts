import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBA2vCanjzCXgTGyZldM9RdxhW5a9jdDcQ',
        authDomain: 'lopputyo-2362c.firebaseapp.com',
        projectId: 'lopputyo-2362c',
        storageBucket: 'jesse-97982.firebasestorage.app',
        messagingSenderId: '134789759071',
        appId: '1:134789759071:web:ae7599357740e8aa1adbea',
      }),
    ),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
});

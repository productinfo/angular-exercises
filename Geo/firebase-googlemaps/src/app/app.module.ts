import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

// Config files
import { environment } from '../environments/environment';

// Firebase
import { firebaseConfig } from "../environments/firebase.config";
import { FirebaseService } from "./shared/services/firebase.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Google Maps
import { googleMapsConfig } from "../environments/googlemaps.config";
import { AgmCoreModule } from '@agm/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Google Material Design
import { MaterialModule } from "@angular/material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Special operators that allow you to map arrays and exectute functions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// Mobile touch integration
import 'hammerjs';

// Applicatin Specific
import { HomeComponent } from './home/home.component';
import { LocationTrackerDirective } from './location-tracker.directive';

console.log( environment.FIREBASE_CONFIG, environment.GOOGLE_MAPS_API_KEY );

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationTrackerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  	// imports firebase/app needed for everything
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG, environment.FIREBASE_CONFIG.projectId),
	  // imports firebase/database, only needed for database features
    AngularFireDatabaseModule,
	  // imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    // Google Material Design
    MaterialModule,
    // Google Material Animations
    BrowserAnimationsModule,
    // Forms
    ReactiveFormsModule,
    // Maps
    AgmCoreModule.forRoot({ apiKey: environment.GOOGLE_MAPS_API_KEY }),
    // Routing
    RouterModule.forRoot(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

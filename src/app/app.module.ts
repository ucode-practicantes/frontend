import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';

// Configs
import { HammerConfig } from '../assets/config/hammer-config';
import { ExerciseComponent } from './exercise/exercise.component';

import { MatDialogModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    MenuComponent,
    ExerciseComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }

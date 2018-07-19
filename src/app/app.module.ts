import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import {  AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';

import {  MessagesService} from './services/messages.service';
import { AuthService } from './services/auth.service';


const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyBkOA18HhnwXsnidxrsul5xpy7plwO4bDc',
  authDomain: 'champion-c9206.firebaseapp.com',
  databaseURL: 'https://champion-c9206.firebaseio.com',
  projectId: 'champion-c9206',
  storageBucket: 'champion-c9206.appspot.com',
  messagingSenderId: '774388462060'
};

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'message', component: MessageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ConnexionComponent,
    ContactComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ MessagesService, AuthService   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

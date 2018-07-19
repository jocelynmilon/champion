import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private afDb: AngularFireDatabase) { }

  getEmails() {
    return this.afDb.list('email').valueChanges();
  }
  createMessage(email) {
    this.afDb.list('email').push(email);
  }
}

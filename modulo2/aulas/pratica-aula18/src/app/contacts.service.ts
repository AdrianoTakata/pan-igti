import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Contact {
  id: number,
  name: string,
  phone: string
}

const urlBase = 'htttp://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  listContacts() {
    this.http.get(`${urlBase}/contacts`);
  }
}

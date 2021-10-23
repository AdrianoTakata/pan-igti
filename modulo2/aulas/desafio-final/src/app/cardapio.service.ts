import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Carpadio {
  categoria: string,
  descricao: string,
  preco: number
};

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  listCardapio() {
    this.http.get(`${urlBase}/cardapio`)
  }
}

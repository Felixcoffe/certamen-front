import { Injectable } from '@angular/core';
import { deckcard } from '../interface/deckcard.interface';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  ELEMENT_DATA: deckcard[] = [
    {position: 1, name: 'winnota, unidora de fuerzas', coste: '2{W}{R}'},
    {position: 2, name: 'winnota, unidora de fuerzas', coste: '2{W}{R}'},
    {position: 3, name: 'winnota, unidora de fuerzas', coste: '2{W}{R}'},
    {position: 4, name: 'winnota, unidora de fuerzas', coste: '2{W}{R}'},
  ]

  constructor() { }

  getDeckCard(){
    return this.ELEMENT_DATA.slice();
  }
  eliminarCarta(index:number){
    this.ELEMENT_DATA.splice(index,1);
  }
}

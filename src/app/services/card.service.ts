import { Injectable } from '@angular/core';
import { Mtgcard } from '../models/mtgcard';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  myCards:Mtgcard[]=[
    {
        id:"war",
        nombre:"final de devastacion",
        img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461615&type=card",
        legendary:false,
        liked:false,
    },
    {
      id:"iko",
      nombre:"winnota, unidora de fuerzas",
      img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480254&type=card",
      legendary:true,
      liked:false,
  },
    {
      id:"woc",
      nombre:"Brenard, ginger sculptor",
      img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=633083&type=card",
      legendary:true,
      liked:false
    },
  ];
  constructor() { }
  public getCarta():Mtgcard[]{
    return this.myCards;
  }
  public getOnlyFav():Mtgcard[]{
    return this.myCards.filter(item =>item.liked)
  }

  liked(id:string){
    this.myCards.forEach(
        item=>{
            if(item.id===id){
                item.liked = !item.liked;
            }
        }    
    )
  }

  getCardById(cardId: string):Mtgcard {
    return this.myCards.find(item=>item.id===cardId)!;
  }
  
}

import { Injectable } from '@angular/core';
import { Mtgdeck } from '../models/mtgdeck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  myDecks:Mtgdeck[]=[
    {
      id: "001",
      nombre: "mazo1",
      img: "https://i.blogs.es/d13871/masacre/1366_2000.webp",
      liked: false,
    },
  ];


  constructor() { }
  public getDeck():Mtgdeck[]{
    return this.myDecks;
  }

  liked(id:string){
    this.myDecks.forEach(
        item=>{
            if(item.id===id){
                item.liked = !item.liked;
            }
        }    
    )
  }
getDeckById(deckId: string):Mtgdeck {
  return this.myDecks.find(item=>item.id===deckId)!;
}
}
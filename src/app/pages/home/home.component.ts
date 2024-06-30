import { Component, OnInit } from '@angular/core';
import { CartaComponent } from "../carta/carta.component";
import { Mtgcard } from '../../models/mtgcard';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CartaComponent, MatCardModule]
})

export class HomeComponent {
  
  cartaportada:Mtgcard;
  constructor(){
    this.cartaportada ={
      id:"woc",
      nombre:"Brenard, ginger sculptor",
      img: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=633083&type=card",
      legendary:true,
      liked:false
    };

}

}

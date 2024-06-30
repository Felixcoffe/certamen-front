import { Component, OnInit } from '@angular/core';
import { Mtgcard } from '../../models/mtgcard';
import { CardService } from '../../services/card.service';
import { CartaComponent } from "../carta/carta.component";

@Component({
    selector: 'app-coleccion',
    standalone: true,
    templateUrl: './coleccion.component.html',
    styleUrl: './coleccion.component.scss',
    imports: [CartaComponent]
})
export class ColeccionComponent implements OnInit{
    cartas:Mtgcard[]=[];
    constructor(private cardService:CardService){

    }
    ngOnInit(): void{
      this.cartas = this.cardService.getCarta();
    }
}

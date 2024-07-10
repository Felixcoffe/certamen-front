import { Component, OnInit } from '@angular/core';
import { Mtgcard } from '../../models/mtgcard';
import { CardService } from '../../services/card.service';
import { CartaComponent } from "../../componentes/carta/carta.component";
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../componentes/search-bar/search-bar.component';

@Component({
    selector: 'app-coleccion',
    standalone: true,
    templateUrl: './coleccion.component.html',
    styleUrl: './coleccion.component.scss',
    imports: [CartaComponent, SearchBarComponent, CommonModule]
})
export class ColeccionComponent implements OnInit{
    cartas:Mtgcard[]=[];
    constructor(private cardService:CardService){

    }
    ngOnInit(): void{
      this.cartas = this.cardService.getCarta();
    }
}

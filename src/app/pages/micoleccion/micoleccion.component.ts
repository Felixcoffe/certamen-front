import { Component, OnInit } from '@angular/core';
import { Mtgcard } from '../../models/mtgcard';
import { CardService } from '../../services/card.service';
import { CartaComponent } from "../carta/carta.component";

@Component({
    selector: 'app-micoleccion',
    standalone: true,
    templateUrl: './micoleccion.component.html',
    styleUrl: './micoleccion.component.scss',
    imports: [CartaComponent]
})
export class MicoleccionComponent implements OnInit {
  
  cartas:Mtgcard[];
  constructor(private cardService:CardService){}

  ngOnInit(): void {
    this.cartas = this.cardService.getOnlyFav();
  }

}

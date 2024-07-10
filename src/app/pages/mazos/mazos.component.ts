import { Component } from '@angular/core';
import { Mtgdeck } from '../../models/mtgdeck';
import { DeckService } from '../../services/deck.service';
import { DeckComponent } from '../../componentes/deck/deck.component';

@Component({
  selector: 'app-mazos',
  standalone: true,
  imports: [DeckComponent],
  templateUrl: './mazos.component.html',
  styleUrl: './mazos.component.scss'
})
export class MazosComponent {

  mazos:Mtgdeck[];
  constructor(private deckService:DeckService){}

  ngOnInit(): void{
    this.mazos = this.deckService.getDeck();
  }

}

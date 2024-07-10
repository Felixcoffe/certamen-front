import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Mtgdeck } from '../../models/mtgdeck';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [CommonModule, MatCardModule , MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss'
})
export class DeckComponent {
  @Input() mtgdeck:Mtgdeck;

  constructor(private deckService:DeckService,){}
  


}

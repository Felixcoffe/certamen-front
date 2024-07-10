import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Mtgcard } from '../../models/mtgcard';
import { CardService } from '../../services/card.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule, MatCardModule , MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.scss'
})
export class CartaComponent {
  @Input() mtgcard:Mtgcard;

  constructor(private cartaService:CardService,){}

  public like(){
    this.cartaService.liked(this.mtgcard.id!);
  }

}

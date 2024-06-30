import { Component, Input } from '@angular/core';
import { Mtgcard } from '../../models/mtgcard';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  cardId:string;
   mtgcard:Mtgcard;
  constructor(
    private activatedRouter:ActivatedRoute,
    private router:Router,
    private cardService:CardService,

  ){
    this.activatedRouter.params.subscribe(
      params=>{
          this.cardId =params['id'];
          this.mtgcard = this.cardService.getCardById(this.cardId);
      }
    )
  }
  back() {
    this.router.navigate(['/coleccion']);
  }

  public like(){
    this.cardService.liked(this.mtgcard.id!);
  }
}

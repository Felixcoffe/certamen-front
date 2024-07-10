import { Component } from '@angular/core';
import { Mtgdeck } from '../../models/mtgdeck';
import { DeckService } from '../../services/deck.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detmazo',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './detmazo.component.html',
  styleUrl: './detmazo.component.scss'
})
export class DetmazoComponent {
  deckId:string;
  mtgdeck:Mtgdeck;
 constructor(
   private activatedRouter:ActivatedRoute,
   private router:Router,
   private deckService:DeckService,
 ){
   this.activatedRouter.params.subscribe(
     params=>{
         this.deckId =params['id'];
         this.mtgdeck = this.deckService.getDeckById(this.deckId);
     }
   )
 }
 back() {
   this.router.navigate(['/mazos']);
 }

}

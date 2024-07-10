import { Component } from '@angular/core';
import { Mtgdeck } from '../../models/mtgdeck';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DeckService } from '../../services/deck.service';
import { TablaService } from '../../services/tabla.service';
import { CommonModule, Location} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-agregarcarta',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule, MatTableModule,MatToolbar],
  templateUrl: './agregarcarta.component.html',
  styleUrl: './agregarcarta.component.scss'
})
export class AgregarcartaComponent {
  deckId:string;
  mtgdeck:Mtgdeck;

 constructor(
   private activatedRouter:ActivatedRoute,
   private router:Router,
   private deckService:DeckService,
   private tablaService:TablaService,
   private location:Location,
 )
 {
   this.activatedRouter.params.subscribe(
     params=>{
         this.deckId =params['id'];
         this.mtgdeck = this.deckService.getDeckById(this.deckId);
     }
   )
 }
 back(): void {
  this.location.back();
}
}

import { Component, OnInit } from '@angular/core';
import { Mtgdeck } from '../../models/mtgdeck';
import { DeckService } from '../../services/deck.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { deckcard } from '../../interface/deckcard.interface';
import { TablaService } from '../../services/tabla.service';

@Component({
  selector: 'app-detmazo',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule, MatTableModule,],
  templateUrl: './detmazo.component.html',
  styleUrl: './detmazo.component.scss'
})



export class DetmazoComponent implements OnInit {
  ELEMENT_DATA: deckcard[] = [];
  displayedColumns: string[] = ['name','position','coste','espacio1','acciones', ];
  dataSource!: MatTableDataSource<any>; 

  deckId:string;
  mtgdeck:Mtgdeck;

 constructor(
   private activatedRouter:ActivatedRoute,
   private router:Router,
   private deckService:DeckService,
   private tablaService:TablaService,
 )
 {
   this.activatedRouter.params.subscribe(
     params=>{
         this.deckId =params['id'];
         this.mtgdeck = this.deckService.getDeckById(this.deckId);
     }
   )
 }
 ngOnInit(): void {
  this.cargarcartas();
   
 }
 cargarcartas(){
  this.ELEMENT_DATA =this.tablaService.getDeckCard();
  this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 }
 back() {
   this.router.navigate(['/mazos']);
 }
 eliminarCarta(index:number){
  console.log
  this.tablaService.eliminarCarta(index);
  this.cargarcartas();

 }


}

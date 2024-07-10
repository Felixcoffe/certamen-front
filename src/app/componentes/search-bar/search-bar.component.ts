import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';
import { Mtgcard } from '../../models/mtgcard';
import { CartaComponent } from "../../componentes/carta/carta.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CartaComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  filteredCards: Mtgcard[] = [];
  cardRows: Mtgcard[][] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.filteredCards = this.cardService.getCarta();
    this.createCardRows();

    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.filteredCards = this.cardService.searchCardsByName(value!);
      this.createCardRows();
    });
  }
  private createCardRows() {
    this.cardRows = [];
    for (let i = 0; i < this.filteredCards.length; i += 3) {
      this.cardRows.push(this.filteredCards.slice(i, i + 3));
    }
  }
}

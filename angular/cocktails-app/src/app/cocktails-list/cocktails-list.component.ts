import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.listByFirstLetter('b');
    console.log(this.cocktails$);
  }

}

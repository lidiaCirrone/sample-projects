import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent implements OnInit {
   cocktails$!: Observable<Cocktail[]>;
 
   constructor(private cocktailService: CocktailService) { }
 
   ngOnInit(): void {
     this.cocktails$ = this.cocktailService.listByFirstLetter('b');
     console.log(this.cocktails$);
   }
 
 }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent implements OnInit {
   ingredients$!: Observable<Array<string>>;
 
   constructor(private cocktailService: CocktailService) { }
 
   ngOnInit(): void {
     this.ingredients$ = this.cocktailService.getIngredients();
   }
 
 }

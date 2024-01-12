import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ingredient } from './ingredient.model';
import { CocktailService } from './cocktail.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientDetailsResolver implements Resolve<Ingredient> {
  constructor(private cocktailService: CocktailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Ingredient> {
    const name = route.paramMap.get('name');
    return this.cocktailService.getIngredientByName(name);
  }
}

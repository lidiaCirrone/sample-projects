import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CocktailService } from './cocktail.service';
import { inject } from '@angular/core';
import { Ingredient } from './ingredient.model';

export const ingredientDetailsResolver: ResolveFn<Ingredient> = (
  route: ActivatedRouteSnapshot
) => {
  const cocktailService = inject(CocktailService);
  const name = route.paramMap.get('name');

  // TO-DO: check
  if (!name) {
    throw new Error(`No ingredient name selected.`);
  }

  return cocktailService.getIngredientByName(name);
};

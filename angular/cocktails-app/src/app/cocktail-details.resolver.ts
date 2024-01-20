import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CocktailService } from './cocktail.service';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail.model';

export const cocktailDetailsResolver: ResolveFn<Cocktail> = (
  route: ActivatedRouteSnapshot
): Observable<Cocktail> => {
  const cocktailService = inject(CocktailService);

  const id = route.paramMap.get('id');

  // TO-DO: check
  if (!id) {
    throw new Error(`No cocktail id selected.`);
  }
  
  return cocktailService.getById(id);
};

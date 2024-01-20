import { Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { cocktailDetailsResolver } from './cocktail-details.resolver';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { ingredientDetailsResolver } from './ingredient-details.resolver';
import { CreditsComponent } from './credits/credits.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'list',
    component: CocktailsListComponent,
  },
  {
    path: 'cocktail-details/:id',
    component: CocktailDetailsComponent,
    resolve: {
      cocktail: cocktailDetailsResolver,
    },
  },
  {
    path: 'ingredients-list',
    component: IngredientsListComponent,
  },
  {
    path: 'ingredient-details/:name',
    component: IngredientDetailsComponent,
    resolve: {
      ingredient: ingredientDetailsResolver,
    },
  },
  {
    path: 'credits',
    component: CreditsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

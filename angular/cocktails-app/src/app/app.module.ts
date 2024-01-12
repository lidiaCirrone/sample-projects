import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CocktailDetailsResolver } from './cocktail-details.resolver';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { IngredientDetailsResolver } from './ingredient-details.resolver';

const routes: Route[] = [
  {
    path: 'list',
    component: CocktailsListComponent
  },
  {
    path: 'cocktail-details/:id',
    component: CocktailDetailsComponent,
    resolve: {
      cocktail: CocktailDetailsResolver
    }
  },
  {
    path: 'ingredients-list',
    component: IngredientsListComponent
  },
  {
    path: 'ingredient-details/:name',
    component: IngredientDetailsComponent,
    resolve: {
      ingredient: IngredientDetailsResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    NotFoundPageComponent,
    IngredientsListComponent,
    IngredientDetailsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

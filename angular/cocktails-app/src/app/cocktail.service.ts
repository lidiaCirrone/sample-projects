import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from './cocktail.model';
import { Ingredient } from './ingredient.model';

interface CocktailDbDrink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
}

interface CocktailDbResult {
  drinks: Array<CocktailDbDrink>;
}

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  static baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  listByFirstLetter(letter: string): Observable<Array<Cocktail>> {
    const url = `${CocktailService.baseUrl}/search.php?f=${letter}`;
    return this.http
      .get<CocktailDbResult>(url)
      .pipe(map((result: CocktailDbResult) => this.mapResultToModel(result)));
  }

  getById(id: string): Observable<Cocktail> {
    const url = `${CocktailService.baseUrl}/lookup.php?i=${id}`;
    return this.http.get<CocktailDbResult>(url).pipe(
      map((result: CocktailDbResult) => this.mapResultToModel(result)),
      map((drinks: Array<Cocktail>) => {
        if (!drinks.length) {
          throw new Error(`Cocktail with id ${id} not found.`);
        }

        return drinks[0];
      })
    );
  }

  getIngredients(): Observable<Array<string>> {
    const url = `${CocktailService.baseUrl}/list.php?i=list`;
    return this.http
      .get<{ drinks: Array<{ strIngredient1: string }> }>(url)
      .pipe(
        map((result: { drinks: Array<{ strIngredient1: string }> }) => {
          return result.drinks.map((d) => d.strIngredient1);
        })
      );
  }

  getIngredientByName(name: string): Observable<Ingredient> {
    const url = `${CocktailService.baseUrl}/search.php?i=${name}`;
    return this.http.get(url).pipe(
      map((result: any) => {
        const { ingredients } = result;
        if (!ingredients.length) {
          throw new Error(`Ingredient with name ${name} not found.`);
        }
        return ingredients[0];
      })
    );
  }

  private mapResultToModel(
    cocktailDbResult: CocktailDbResult
  ): Array<Cocktail> {
    const drinks = cocktailDbResult?.drinks || [];

    return drinks
      .filter((drink) => !!drink) // remove null values
      .map((drink) => this.mapSingleDrinkToModel(drink));
  }

  private mapSingleDrinkToModel(drink: CocktailDbDrink): Cocktail {
    //  if (!drink) {
    //    return null;
    //  }

    const ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ].filter((ingredient) => !!ingredient); // remove null values

    return {
      id: drink.idDrink,
      name: drink.strDrink,
      category: drink.strCategory,
      instructions: drink.strInstructions,
      alcoholic: drink.strAlcoholic,
      glass: drink.strGlass,
      imageUrl: drink.strDrinkThumb,
      ingredients,
    };
  }
}

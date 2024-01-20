import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]
};

// @NgModule({
//    declarations: [
//      AppComponent,
//      CocktailsListComponent,
//      CocktailDetailsComponent,
//      NotFoundPageComponent,
//      IngredientsListComponent,
//      IngredientDetailsComponent,
//      CreditsComponent
//    ],
//    imports: [
//      BrowserModule,
//      ClarityModule,
//      BrowserAnimationsModule,
//      RouterModule.forRoot(routes),
//      FormsModule,
//      HttpClientModule
//    ],
//    providers: [],
//    bootstrap: [AppComponent]
//  })
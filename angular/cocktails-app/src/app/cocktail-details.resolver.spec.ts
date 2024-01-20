import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cocktailDetailsResolver } from './cocktail-details.resolver';

describe('cocktailDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cocktailDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

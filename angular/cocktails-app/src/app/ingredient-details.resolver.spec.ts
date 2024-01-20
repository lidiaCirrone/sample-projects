import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { ingredientDetailsResolver } from './ingredient-details.resolver';

describe('ingredientDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => ingredientDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

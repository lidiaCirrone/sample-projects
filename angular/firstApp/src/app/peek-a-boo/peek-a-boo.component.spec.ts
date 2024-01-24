import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooComponent } from './peek-a-boo.component';

describe('PeekABooComponent', () => {
  let component: PeekABooComponent;
  let fixture: ComponentFixture<PeekABooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeekABooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeekABooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

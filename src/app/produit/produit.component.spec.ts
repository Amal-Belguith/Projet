import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRODUITComponent } from './produit.component';

describe('PRODUITComponent', () => {
  let component: PRODUITComponent;
  let fixture: ComponentFixture<PRODUITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRODUITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRODUITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

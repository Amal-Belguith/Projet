import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIBREComponent } from './fibre.component';

describe('FIBREComponent', () => {
  let component: FIBREComponent;
  let fixture: ComponentFixture<FIBREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIBREComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIBREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

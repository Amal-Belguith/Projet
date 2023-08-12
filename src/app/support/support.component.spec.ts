import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUPPORTComponent } from './support.component';

describe('SUPPORTComponent', () => {
  let component: SUPPORTComponent;
  let fixture: ComponentFixture<SUPPORTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SUPPORTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUPPORTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

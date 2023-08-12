import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORTINETComponent } from './fortinet.component';

describe('FORTINETComponent', () => {
  let component: FORTINETComponent;
  let fixture: ComponentFixture<FORTINETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FORTINETComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FORTINETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

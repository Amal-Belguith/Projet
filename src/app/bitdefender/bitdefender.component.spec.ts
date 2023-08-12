import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BITDEFENDERComponent } from './bitdefender.component';

describe('BITDEFENDERComponent', () => {
  let component: BITDEFENDERComponent;
  let fixture: ComponentFixture<BITDEFENDERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BITDEFENDERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BITDEFENDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

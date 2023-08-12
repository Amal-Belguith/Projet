import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AKCPComponent } from './akcp.component';

describe('AKCPComponent', () => {
  let component: AKCPComponent;
  let fixture: ComponentFixture<AKCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AKCPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AKCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

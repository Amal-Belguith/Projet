import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WATCHGUARDComponent } from './watchguard.component';

describe('WATCHGUARDComponent', () => {
  let component: WATCHGUARDComponent;
  let fixture: ComponentFixture<WATCHGUARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WATCHGUARDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WATCHGUARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

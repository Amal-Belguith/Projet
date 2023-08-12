import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIDEOComponent } from './video.component';

describe('VIDEOComponent', () => {
  let component: VIDEOComponent;
  let fixture: ComponentFixture<VIDEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VIDEOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VIDEOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

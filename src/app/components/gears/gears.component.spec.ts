import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearsComponent } from './gears.component';

describe('GearsComponent', () => {
  let component: GearsComponent;
  let fixture: ComponentFixture<GearsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GearsComponent]
    });
    fixture = TestBed.createComponent(GearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { In1Component } from './in1.component';

describe('In1Component', () => {
  let component: In1Component;
  let fixture: ComponentFixture<In1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ In1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(In1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

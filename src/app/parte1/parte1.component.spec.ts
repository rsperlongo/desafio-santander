import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte1Component } from './parte1.component';

describe('Parte1Component', () => {
  let component: Parte1Component;
  let fixture: ComponentFixture<Parte1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parte1Component]
    });
    fixture = TestBed.createComponent(Parte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

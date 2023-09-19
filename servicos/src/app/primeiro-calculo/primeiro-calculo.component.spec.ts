import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroCalculoComponent } from './primeiro-calculo.component';

describe('PrimeiroCalculoComponent', () => {
  let component: PrimeiroCalculoComponent;
  let fixture: ComponentFixture<PrimeiroCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroCalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

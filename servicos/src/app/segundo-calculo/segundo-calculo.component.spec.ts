import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCalculoComponent } from './segundo-calculo.component';

describe('SegundoCalculoComponent', () => {
  let component: SegundoCalculoComponent;
  let fixture: ComponentFixture<SegundoCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoCalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

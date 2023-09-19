import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgContentSimplesComponent } from './diretiva-ng-content-simples.component';

describe('DiretivaNgContentSimplesComponent', () => {
  let component: DiretivaNgContentSimplesComponent;
  let fixture: ComponentFixture<DiretivaNgContentSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgContentSimplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgContentSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

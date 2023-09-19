import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensagemComponent } from './componente-mensagem.component';

describe('ComponenteMensagemComponent', () => {
  let component: ComponenteMensagemComponent;
  let fixture: ComponentFixture<ComponenteMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

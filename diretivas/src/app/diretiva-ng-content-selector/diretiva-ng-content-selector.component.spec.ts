import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgContentSelectorComponent } from './diretiva-ng-content-selector.component';

describe('DiretivaNgContentSelectorComponent', () => {
  let component: DiretivaNgContentSelectorComponent;
  let fixture: ComponentFixture<DiretivaNgContentSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgContentSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgContentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

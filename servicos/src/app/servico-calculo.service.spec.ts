import { TestBed } from '@angular/core/testing';

import { ServicoCalculoService } from './servico-calculo.service';

describe('ServicoCalculoService', () => {
  let service: ServicoCalculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoCalculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InformacoesService } from './informacoes.service';

describe('InformacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacoesService = TestBed.get(InformacoesService);
    expect(service).toBeTruthy();
  });
});

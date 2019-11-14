import { TestBed } from '@angular/core/testing';

import { ScriptIncidenceService } from './script-incidence.service';

describe('ScriptIncidenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptIncidenceService = TestBed.get(ScriptIncidenceService);
    expect(service).toBeTruthy();
  });
});

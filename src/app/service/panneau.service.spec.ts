import { TestBed } from '@angular/core/testing';

import { PanneauService } from './panneau.service';

describe('PanneauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanneauService = TestBed.get(PanneauService);
    expect(service).toBeTruthy();
  });
});

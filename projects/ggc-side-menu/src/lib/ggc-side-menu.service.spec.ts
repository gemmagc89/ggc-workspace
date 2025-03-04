import { TestBed } from '@angular/core/testing';

import { GgcSideMenuService } from './ggc-side-menu.service';

describe('GgcSideMenuService', () => {
  let service: GgcSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GgcSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuditChecklistServiceService } from './audit-checklist-service.service';

describe('AuditChecklistServiceService', () => {
  let service: AuditChecklistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditChecklistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

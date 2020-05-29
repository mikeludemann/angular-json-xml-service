import { TestBed } from '@angular/core/testing';

import { JsonXmlService } from './json-xml.service';

describe('JsonXmlService', () => {
  let service: JsonXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

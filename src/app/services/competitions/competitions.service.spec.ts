import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompetitionsService } from './competitions.service';

describe('CompetitionsService', () => {
  let httpTestingController: HttpTestingController;
  let service: CompetitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CompetitionsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getAvailableSeasons should return array of strings', (done) => {
    const expectedData: string[] = [
      '2022',
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2015',
      '2007',
    ];

    service.getAvailableSeasons().subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://api.football-data.org/v2/competitions'
    );
    testRequest.flush(expectedData);
  });

  // it('#getData should use GET to retrieve data', () => {
  //   service.getData().subscribe();

  //   const testRequest = httpTestingController.expectOne('http://localhost:9999/data');

  //   expect(testRequest.request.method).toEqual('GET');
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

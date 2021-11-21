import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { CompetitionsPage } from './competitions.page';
import { CompetitionsService } from './../../services/competitions/competitions.service';
import { of } from 'rxjs';

describe('Test CompetitionsPage', () => {
  let component: CompetitionsPage;
  let competititonService: CompetitionsService;
  let fixture: ComponentFixture<CompetitionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [CompetitionsService]
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionsPage);
    component = fixture.componentInstance;
    competititonService = TestBed.get(CompetitionsService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Must get array of seasons from competitions.service', () => {
    const expectedData = of( [2022, 2021, 2020, 2019, 2018, 2017, 2015, 2007] );
    spyOn(competititonService, 'getAvailableSeasons').and.returnValue(expectedData);
    expect(competititonService.getAvailableSeasons).toHaveBeenCalled();
  });
});

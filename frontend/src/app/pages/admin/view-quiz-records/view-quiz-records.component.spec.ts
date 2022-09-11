import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizRecordsComponent } from './view-quiz-records.component';

describe('ViewQuizRecordsComponent', () => {
  let component: ViewQuizRecordsComponent;
  let fixture: ComponentFixture<ViewQuizRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuizRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

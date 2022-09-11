import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserRecordsComponent } from './view-user-records.component';

describe('ViewUserRecordsComponent', () => {
  let component: ViewUserRecordsComponent;
  let fixture: ComponentFixture<ViewUserRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

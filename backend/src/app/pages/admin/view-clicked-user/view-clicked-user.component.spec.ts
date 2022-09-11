import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClickedUserComponent } from './view-clicked-user.component';

describe('ViewClickedUserComponent', () => {
  let component: ViewClickedUserComponent;
  let fixture: ComponentFixture<ViewClickedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClickedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClickedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

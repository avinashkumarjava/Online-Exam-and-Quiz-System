import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequizInstructionsComponent } from './prequiz-instructions.component';

describe('PrequizInstructionsComponent', () => {
  let component: PrequizInstructionsComponent;
  let fixture: ComponentFixture<PrequizInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrequizInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequizInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

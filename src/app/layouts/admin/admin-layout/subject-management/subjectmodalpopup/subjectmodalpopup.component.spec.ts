import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectmodalpopupComponent } from './subjectmodalpopup.component';

describe('SubjectmodalpopupComponent', () => {
  let component: SubjectmodalpopupComponent;
  let fixture: ComponentFixture<SubjectmodalpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectmodalpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectmodalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

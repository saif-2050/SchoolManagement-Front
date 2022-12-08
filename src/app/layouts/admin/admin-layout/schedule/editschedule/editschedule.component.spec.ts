import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscheduleComponent } from './editschedule.component';

describe('EditscheduleComponent', () => {
  let component: EditscheduleComponent;
  let fixture: ComponentFixture<EditscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditscheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

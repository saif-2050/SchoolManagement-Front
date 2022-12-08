import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsheduleComponent } from './showshedule.component';

describe('ShowsheduleComponent', () => {
  let component: ShowsheduleComponent;
  let fixture: ComponentFixture<ShowsheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

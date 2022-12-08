import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsheduleComponent } from './addshedule.component';

describe('AddsheduleComponent', () => {
  let component: AddsheduleComponent;
  let fixture: ComponentFixture<AddsheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

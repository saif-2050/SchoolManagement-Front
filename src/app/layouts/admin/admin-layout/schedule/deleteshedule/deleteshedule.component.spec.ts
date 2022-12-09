import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesheduleComponent } from './deleteshedule.component';

describe('DeletesheduleComponent', () => {
  let component: DeletesheduleComponent;
  let fixture: ComponentFixture<DeletesheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletesheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletesheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

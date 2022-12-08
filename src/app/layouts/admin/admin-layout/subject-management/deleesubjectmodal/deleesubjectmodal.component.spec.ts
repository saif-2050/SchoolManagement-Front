import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleesubjectmodalComponent } from './deleesubjectmodal.component';

describe('DeleesubjectmodalComponent', () => {
  let component: DeleesubjectmodalComponent;
  let fixture: ComponentFixture<DeleesubjectmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleesubjectmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleesubjectmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

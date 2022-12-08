import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tDeletepopupComponent } from './tdeletepopup.component';

describe('DeletepopupComponent', () => {
  let component: tDeletepopupComponent;
  let fixture: ComponentFixture<tDeletepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tDeletepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tDeletepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

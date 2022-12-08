import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmodalpopupComponent } from './classmodalpopup.component';

describe('ClassmodalpopupComponent', () => {
  let component: ClassmodalpopupComponent;
  let fixture: ComponentFixture<ClassmodalpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassmodalpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassmodalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdeletemodalComponent } from './classdeletemodal.component';

describe('ClassdeletemodalComponent', () => {
  let component: ClassdeletemodalComponent;
  let fixture: ComponentFixture<ClassdeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassdeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassdeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

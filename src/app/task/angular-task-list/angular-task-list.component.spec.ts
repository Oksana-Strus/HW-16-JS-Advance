import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTaskListComponent } from './angular-task-list.component';

describe('AngularTaskListComponent', () => {
  let component: AngularTaskListComponent;
  let fixture: ComponentFixture<AngularTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

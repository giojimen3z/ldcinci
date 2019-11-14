import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostProjectsComponent } from './cost-projects.component';

describe('CostProjectsComponent', () => {
  let component: CostProjectsComponent;
  let fixture: ComponentFixture<CostProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

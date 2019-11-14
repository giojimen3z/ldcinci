import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptIncidenceComponent } from './script-incidence.component';

describe('ScriptIncidenceComponent', () => {
  let component: ScriptIncidenceComponent;
  let fixture: ComponentFixture<ScriptIncidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptIncidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptIncidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

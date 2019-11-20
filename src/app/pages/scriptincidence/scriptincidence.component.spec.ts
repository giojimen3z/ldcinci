import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptincidenceComponent } from './scriptincidence.component';

describe('ScriptincidenceComponent', () => {
  let component: ScriptincidenceComponent;
  let fixture: ComponentFixture<ScriptincidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptincidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptincidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

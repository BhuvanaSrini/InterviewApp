import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCompComponent } from './skill-comp.component';

describe('SkillCompComponent', () => {
  let component: SkillCompComponent;
  let fixture: ComponentFixture<SkillCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

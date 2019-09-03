import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizHomePage } from './quiz-home.page';

describe('QuizHomePage', () => {
  let component: QuizHomePage;
  let fixture: ComponentFixture<QuizHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

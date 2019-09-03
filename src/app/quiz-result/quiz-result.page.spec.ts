import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultPage } from './quiz-result.page';

describe('QuizResultPage', () => {
  let component: QuizResultPage;
  let fixture: ComponentFixture<QuizResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

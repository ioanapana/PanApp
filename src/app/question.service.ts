import { Injectable } from '@angular/core';
import { QuizQuestion } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: QuizQuestion[] = [
	{ id: 0, panneauId: 5, question: 'Ce panneau indique:',
	choix1: 'une interdiction de tourner à gauche',
	choix2: 'une interdiction de tourner à droite',
	choix3: 'une interdiction de stationner',
	choix4: 'une interdiction de faire demi-tour',
	bonChoix: 2
	},
	{ id: 1, panneauId: 2, question: 'Ce panneau indique:',
	choix1: 'une interdiction de tourner à gauche',
	choix2: 'une interdiction de tourner à droite',
	choix3: 'une interdiction de stationner',
	choix4: 'une interdiction de faire demi-tour',
	bonChoix: 1
	},
	{ id: 2, panneauId: 3, question: 'Ce panneau indique:',
	choix1: 'une interdiction de tourner à gauche',
	choix2: 'une interdiction de tourner à droite',
	choix3: 'une interdiction de stationner',
	choix4: 'une interdiction de faire demi-tour',
	bonChoix: 4
	}
  ]
  constructor() { }

  get(id: number) {
	return this.questions[id];
  }

  count() {
	return this.questions.length;
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quiz-home',
  templateUrl: './quiz-home.page.html',
  styleUrls: ['./quiz-home.page.scss'],
})
export class QuizHomePage implements OnInit {

  lastQuiz = 0

  constructor(private storage: Storage) {
	// Récupérer le résultat du derier quiz
	storage.get('lastQuiz').then( (val) => {
  	this.lastQuiz = val
	})
  }

  ngOnInit() {
  }

  test() {
	this.storage.set('lastQuiz', 9);

	this.storage.get('lastQuiz').then( (val) => {
  	this.lastQuiz = val
	})
  }


}

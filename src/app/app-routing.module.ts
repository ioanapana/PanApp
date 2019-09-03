import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'panneaux', loadChildren: './panneaux/panneaux.module#PanneauxPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'quiz-home', loadChildren: './quiz-home/quiz-home.module#QuizHomePageModule' },
  { path: 'parametres', loadChildren: './parametres/parametres.module#ParametresPageModule' },
  { path: 'note', loadChildren: './note/note.module#NotePageModule' },
  { path: 'panneau-detail', loadChildren: './panneau-detail/panneau-detail.module#PanneauDetailPageModule' },
  { path: 'quiz-question', loadChildren: './quiz-question/quiz-question.module#QuizQuestionPageModule' },
  { path: 'quiz-result', loadChildren: './quiz-result/quiz-result.module#QuizResultPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

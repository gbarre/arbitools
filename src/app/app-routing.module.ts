import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableDisciplineComponent } from './table-discipline/table-discipline.component';
import { QuizComponent } from './quizz/quizz.component';
import { ChangelogComponent } from './changelog/changelog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table-discipline', component: TableDisciplineComponent },
  { path: 'quizz', component: QuizComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableCheckerComponent } from './table-checker/table-checker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableDisciplineComponent } from './table-discipline/table-discipline.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { NgToggleModule } from 'ng-toggle-button';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quizz/quizz.component';
import { ChangelogComponent } from './changelog/changelog.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ScoreTrainerComponent } from './score-trainer/score-trainer.component';
import { NewsComponent } from './news/news.component';
import { RulesComponent } from './rules/rules.component';
import { TrispotComponent } from './score-trainer/trispot/trispot.component';
import { MonospotComponent } from './score-trainer/monospot/monospot.component';
import { TargetComponent } from 'src/app/components/target/target.component';
import { ScoreFormComponent } from './components/score-form/score-form.component';
import { ScoreResultComponent } from './components/score-result/score-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent,
    HomeComponent,
    MonospotComponent,
    NewsComponent,
    QuizComponent,
    RulesComponent,
    ScoreTrainerComponent,
    ShowTableComponent,
    TableCheckerComponent,
    TableDisciplineComponent,
    TrispotComponent,
    ScoreFormComponent,
    ScoreResultComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgToggleModule.forRoot(),
    ReactiveFormsModule,
    TargetComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

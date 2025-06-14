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

@NgModule({
  declarations: [
    AppComponent,
    ChangelogComponent,
    HomeComponent,
    QuizComponent,
    TableCheckerComponent,
    TableDisciplineComponent,
    ScoreTrainerComponent,
    ShowTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgToggleModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

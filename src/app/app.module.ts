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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableCheckerComponent,
    TableDisciplineComponent,
    ShowTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgToggleModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableCheckerComponent } from './table-checker/table-checker.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'table-checker',
    component: TableCheckerComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

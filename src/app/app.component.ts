import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { DisciplinesConfig } from './models/discipline.model';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arbitools';
  navLinks = routes.filter((route) => route.path && route.path !== '**');
  disciplines: DisciplinesConfig = environment.disciplines;
  disciplineKeys: string[] = Object.keys(this.disciplines);
}

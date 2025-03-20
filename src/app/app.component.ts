import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { DisciplinesConfig } from './models/discipline.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arbitools';
  disciplines: DisciplinesConfig = environment.disciplines;
  disciplineKeys: string[] = Object.keys(this.disciplines);
}

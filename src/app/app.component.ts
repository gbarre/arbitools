import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { DisciplinesConfig } from './models/discipline.model';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'arbitools';
  disciplines: DisciplinesConfig = environment.disciplines;
  disciplineKeys: string[] = Object.keys(this.disciplines);
  version: string = packageInfo.version;
}

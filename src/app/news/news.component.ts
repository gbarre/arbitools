import { Component } from '@angular/core';
import { reglements } from 'src/environments/reglements';
import { Topic } from '../models/rules.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  standalone: false,
})
export class NewsComponent {
  rules = reglements;
  rulesKeys = Object.keys(this.rules);

  isFirstGeneral(topics: Topic[], index: number): boolean {
    return (
      topics[index].title.startsWith('I.') &&
      topics.findIndex((t) => t.title.startsWith('I.')) === index
    );
  }

  isFirstSportif(topics: Topic[], index: number): boolean {
    return (
      topics[index].title.startsWith('II.') &&
      topics.findIndex((t) => t.title.startsWith('II.')) === index
    );
  }
}

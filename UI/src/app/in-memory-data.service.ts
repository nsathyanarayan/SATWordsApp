import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SATWordDefinition } from './SATWordDefinition';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService  implements InMemoryDbService {

  constructor() { }
  createDb() {
    const WordsList: SATWordDefinition[] = [
      {
          name: 'Pessimistic',
          description : 'tending to see the worst aspect of things or believe that the worst will happen.',
          alternates : 'gloomy, negative, downbeat, depressed',
          antonyms : 'optimistic',
          category : 'General'
      },
      {
          name: 'Austere',
          description : 'severe or strict in manner, attitude, or appearance.',
          alternates : 'severe, stern, strict, harsh, steely, flinty',
          antonyms : 'ornate',
          category : 'General'
      },
      {
          name: 'Abysmal',
          description : 'extremely bad; appalling.',
          alternates : 'deep, dreadful, awful, terrible, frightful',
          antonyms : 'shallow',
          category : 'General'
      }
    ];

    return { WordsList };
  }

  genId(words: SATWordDefinition[]): string {
    return words.length > 0 ? words[0].name : 'N/A'; }
}

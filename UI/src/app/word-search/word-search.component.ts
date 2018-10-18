import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { SATWordDefinition } from '../SATWordDefinition';
import { DictionaryService} from '../DictionaryService';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: [ './word-search.component.css' ]
})

export class WordSearchComponent implements OnInit {
  words$: Observable<SATWordDefinition[]>;
  private searchTerms = new Subject<string>();

  constructor(private wordService: DictionaryService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.words$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.wordService.searchWords(term)),
    );
  }
}

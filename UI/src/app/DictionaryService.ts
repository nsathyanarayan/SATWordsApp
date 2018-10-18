import { Injectable } from '@angular/core';
import { SATWordDefinition } from './SATWordDefinition';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { EnvironmentUrlService } from './shared/services/environment-url.service';

const httpOptions = {
  // tslint:disable-next-line:max-line-length
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers' : 'Origin'})
};

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private wordsUrl = this.envUrl.urlAddress + '/api/words';

  constructor( private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  getWords(): Observable<SATWordDefinition[]> {
    return this.http.get<SATWordDefinition[]>(this.wordsUrl, httpOptions)
    .pipe (
        catchError (this.handleError('getWords', [])));
  }

  getWord(name: string): Observable<SATWordDefinition> {
    const url = '${this.wordsUrl}/$(name)';
    // tslint:disable-next-line:max-line-length
    return this.http.get<SATWordDefinition>(url, httpOptions).pipe ( catchError (this.handleError<SATWordDefinition>('getword name=$(name)')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T>  => {
         console.error(error);
         return of(result as T);
      };
  }

  searchWords(word: string): Observable<SATWordDefinition[]> {
    if ( !word.trim()) {
      return of([]);
    }

    return this.http.get<SATWordDefinition[]>('${this.wordsUrl}/name=${word}').pipe (
      catchError(this.handleError<SATWordDefinition[]>('searchWords', []))
    );
  }

  addWord(word: SATWordDefinition): Observable<SATWordDefinition> {
    return this.http.post<SATWordDefinition>(this.wordsUrl, word, httpOptions).pipe(
      catchError(this.handleError<SATWordDefinition>('addWord'))
    );
  }

  deleteWord(word: string): Observable<SATWordDefinition> {
    const url = `${this.wordsUrl}/${word}`;
      return this.http.delete<SATWordDefinition>(this.wordsUrl, httpOptions).pipe(
        catchError(this.handleError<SATWordDefinition>('deleteWord'))
      );
    }
}

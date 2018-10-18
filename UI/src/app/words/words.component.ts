import { Component, OnInit } from '@angular/core';
import { SATWordDefinition } from '../SATWordDefinition';
import { DictionaryService} from '../DictionaryService';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  wordList: SATWordDefinition[];
  selectedWord: SATWordDefinition;

  constructor(private wordService: DictionaryService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
   this.wordService.getWords().subscribe(words => this.wordList = words);
  }

  add(name: string, description: string, alternates: string, category: string, antonyms: string): void {
    name = name.trim();
    if ( !name) { return; }

    const newWord: SATWordDefinition = new SATWordDefinition();
    newWord.name = name.trim();
    newWord.description = description.trim();
    newWord.category = category.trim();
    newWord.alternates = alternates.trim();
    newWord.antonyms = antonyms.trim();
    this.wordService.addWord( newWord as SATWordDefinition).subscribe( word => { this.wordList.push(word); });
  }

    delete(name: string): void {
          this.wordService.deleteWord(name).subscribe();
    }
  }

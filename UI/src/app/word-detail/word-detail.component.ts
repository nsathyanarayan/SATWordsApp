import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SATWordDefinition } from '../SATWordDefinition';
import { DictionaryService} from '../DictionaryService';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  word: SATWordDefinition;

  constructor(private route: ActivatedRoute,
    private wordService: DictionaryService,
    private location: Location) { }

  ngOnInit() {
    this.getWord();
  }

  getWord(): void {
    const w = this.route.snapshot.paramMap.get('name');
    this.wordService.getWord(w).subscribe(x => this.word = x);
  }

    goBack(): void {
      this.location.back();
  }

}

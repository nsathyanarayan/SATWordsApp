import { Component, OnInit, Input } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { SATWordDefinition } from '../SATWordDefinition';
import { DictionaryService} from '../DictionaryService';

// Similar to a class. If we only need type checking, the interface is sufficient and lighter weight.
interface Flashcard {
    question: string;
    answer: string;
    source: string;
    sourceUrl: string;
}

// decorator syntax

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// export component class
export class DashboardComponent implements OnInit {

    SATWords: SATWordDefinition[] = [];
    public cardIndex = Math.floor((Math.random() * this.SATWords.length));
    public cardOrderIndex = [];
    public answerHidden = true;

    constructor(private ws: DictionaryService) { }

    ngOnInit() {
      this.getWords();
    }

    getWords(): void {
      this.ws.getWords().subscribe(words => this.SATWords = words);
     }

    showAnswer() {
        this.answerHidden = false;
    }

    goToNextCard() {
        this.cardOrderIndex.push(this.cardIndex);
        this.cardIndex = Math.floor((Math.random() * this.SATWords.length));
        this.answerHidden = true;
    }

    goToPrevCard() {
        if (this.cardOrderIndex.length > 0) {
            this.cardIndex = this.cardOrderIndex.pop();
            this.answerHidden = true;
        }
    }
}



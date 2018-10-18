import { Component, OnInit, Input } from '@angular/core';
import { SATWordDefinition } from '../SATWordDefinition';
import { DictionaryService} from '../DictionaryService';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  SATWords: SATWordDefinition[] = [];
  public show = true;
    private currIndex = 0;
    private current = [];
    @Input() index: number;

  constructor(private ws: DictionaryService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    this.ws.getWords().subscribe(words => this.SATWords = words);
   }

  getCurrActive(index) {
      return true;
}

showPanel(type) {
  if ( type === 'next') {
    this.currIndex += 1;
  } else if (this.currIndex > 0 && type === 'prev') {
      this.currIndex -= 1;
  }
}


}

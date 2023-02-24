import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-array-letters',
  templateUrl: './array-letters.component.html',
  styleUrls: ['./array-letters.component.scss']
})
export class ArrayLettersComponent {

  @Output() onLetterSearch: EventEmitter<string> = new EventEmitter<string>();

  public arrLetters: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  public searchOnLetter(letter: string): void {
    this.onLetterSearch.emit(letter)
  }

}

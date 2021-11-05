import { Component, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  constructor() { }

  @Input()
  book: Book | undefined;

}

import { Component, Input, DoCheck, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements DoCheck, OnChanges {

  constructor() { }

  ngDoCheck(): void {
    console.log(`BookComponent.DoCheck: ${this.book?.id}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`BookComponent.OnChanges: ${this.book?.id}`);
  }

  @Input()
  book: Book | undefined;

}

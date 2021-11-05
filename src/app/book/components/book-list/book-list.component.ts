import { Book } from './../../model/book';
import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements DoCheck, OnChanges {

  constructor() { }

  ngDoCheck(): void {
    console.log(`BookListComponent.DoCheck `);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`BookListComponent.OnChanges`);
  }

  likes: number = 0;

  @Input()
  books: Book[] | null = null;

  incrementLikes() {
    this.likes++;
  }
}

import { Observable, EMPTY, Subscription } from 'rxjs';
import { Book } from './../../model/book';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements DoCheck, OnChanges, OnDestroy {

  private subs: Subscription | null = null;

  private _interval: Observable<number> = EMPTY;
  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    // changeDetector.detach();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
      this.subs = null;
    }
  }

  ngDoCheck(): void {
    console.log(`BookListComponent.DoCheck `);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`BookListComponent.OnChanges`);
  }

  @Input()
  set interval(value: Observable<number>) {
    this._interval = value;
    if (this.subs) {
      this.subs.unsubscribe();
      this.subs = null;
    }
    if (this._interval) {
      this.subs = this._interval.subscribe(tick => {
        this.tick = tick;
        this.changeDetector.markForCheck();
      });
    }

  }

  tick: number = 0;

  private _books: Book[] | null = null;

  @Input()
  set books(value: Book[] | null) {
    this._books = value;
    this.changeDetector.detectChanges();
  }

  get books() {
    return this._books;
  }

}

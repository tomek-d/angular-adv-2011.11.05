import { BookProps } from './book/model/book';
import { Component, ɵmarkDirty as markDirty, ɵdetectChanges, NgZone } from '@angular/core';
import { BookService } from './book/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // private _counter: number = 0;

  constructor(
    private bookService: BookService,
    private zone: NgZone
  ) {

  }

  // get counter() {
  //   return this._counter++;
  // }


  books = this.bookService.findAll();

  interval$ = this.bookService.tick();

  addBook(book: BookProps) {
    this.bookService.save(book);
  }

  doSomething(){
    console.log('Clicked');
  }

  buySomeBook() {
    this.bookService.buyBook(2);
    markDirty(this);
  }

  runOutsideOfZone() {
    this.zone.runOutsideAngular(() => {
      let i = 0;
      setInterval(() => {
        console.log('TICK' );
        ++i;
        if (i % 10 === 0) {
          this.zone.run(() => {
            console.log('INSIDE ANGULAR CD');
          });
        }
      }, 1000);
    });
  }
}

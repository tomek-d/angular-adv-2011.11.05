import { BookProps } from './book/model/book';
import { Component } from '@angular/core';
import { BookService } from './book/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // private _counter: number = 0;

  constructor(private bookService: BookService) {

  }

  // get counter() {
  //   return this._counter++;
  // }


  books = this.bookService.findAll();

  addBook(book: BookProps) {
    this.bookService.save(book);
  }

  doSomething(){
    //
  }
}

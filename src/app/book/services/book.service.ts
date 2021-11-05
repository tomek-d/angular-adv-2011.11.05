import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of, timer, scheduled, interval } from 'rxjs';
import { Book, BookProps } from '../model/book';
import { books, BookImpl } from './book.data';

@Injectable()
export class BookService {

  private dummyBooks = books;


  constructor() {
  }

  save(bookToSave: BookProps) {
    this.dummyBooks.push(new BookImpl(bookToSave.author, bookToSave.title));
  }

  findAll(): Book[] {
    return this.dummyBooks;
  }

  tick(): Observable<number> {
    return EMPTY;
  }

  buyBook(id: number) {
    const books = this.dummyBooks;

    if (id < books.length) {
      const old = books[id];
      books[id] = {id: old.id, title: old.title, author: old.author, buys: old.buys + 1};
    }
  }

}

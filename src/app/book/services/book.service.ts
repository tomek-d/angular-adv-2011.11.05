import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
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

}

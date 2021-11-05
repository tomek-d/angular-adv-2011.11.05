import { Book } from '../model/book';


let idCounter = 0;
const nextId = () => idCounter++;


export class BookImpl implements Book {

  private _id: number = nextId();
  private _author: string = '';
  private _title: string = '';

  constructor(author: string, title: string) {
    this._author = author;
    this._title = title;
  }

  buys = 0;

  get id(): number {
    return this._id;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}

export const books: Book[] = [
  new BookImpl("Douglas Crockford", "JavaScript. The Good Parts"),
  new BookImpl("Marek Matczak", "Angular for nerds"),
  new BookImpl("Tom Hombergs", "Get You Hands Dirty on Hexagonal Architecture"),
  new BookImpl("John Smith", "Funny book on Angular")
];

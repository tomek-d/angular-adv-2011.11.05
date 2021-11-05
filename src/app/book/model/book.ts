export interface Book {
  id: number;
  author: string;
  title: string;
  buys: number;
}

export type BookProps = Omit<Book, 'id'>;

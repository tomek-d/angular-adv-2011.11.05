import { BookService } from './services/book.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookEditorComponent } from './components/book-editor/book-editor.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookEditorComponent
  ],
  exports: [
    BookListComponent,
    BookComponent,
    BookEditorComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BookModule {

  static forRoot(): ModuleWithProviders<BookModule> {
    return {
      ngModule: BookModule,
      providers: [BookService]
    };
  }
}

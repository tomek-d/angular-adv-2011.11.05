import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.bookForm = fb.group({
      author: [null, Validators.required],
      title: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  @Output()
  bookAdded = new EventEmitter<Book>();

  saveBook() {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      this.bookForm.reset();
      this.bookAdded.emit(book);
      console.log('Book: ', book);
    }
  }

}

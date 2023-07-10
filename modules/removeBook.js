import Book from '/modules/book.js';
import Show from './show.js';

export const removeBook = (index) => {
  const bookToRemove = new Book()
  bookToRemove.removeBook(index);
  Show();
};
import Book from './book.js';
import Show from './show.js';

const removeBook = (index) => {
  const bookToRemove = new Book();
  bookToRemove.removeBook(index);
  Show();
};

export default removeBook;
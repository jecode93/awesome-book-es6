import Book from './book.js';

const titleInput = document.querySelector('.title-value');
const authorInput = document.querySelector('.author-value');

const addBook = () => {
  const book = new Book(titleInput.value, authorInput.value);
  book.addBook();
  titleInput.value = '';
  authorInput.value = '';
};

export default addBook;
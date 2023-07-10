export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBook(index) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

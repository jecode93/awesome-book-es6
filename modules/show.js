/* eslint-disable import/no-cycle */
import removeBook from './removeBook.js';

const show = () => {
  document.querySelector('.books').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';

  // Add focus to the list-book element
  document.querySelectorAll('a')[0].focus();

  const books = JSON.parse(localStorage.getItem('books')) || [];
  const booksContainer = document.querySelector('.books');

  if (books.length === 0) {
    booksContainer.innerHTML = '<p class="no-books">No books added yet</p>';
    // Remove border from books container
    booksContainer.style.border = 'none';
  } else {
    booksContainer.style.border = '2px solid #000';
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      booksContainer.innerHTML += `
      <div class="book">
        <div class="data-container">
          <p class="title">${book.title}</p>
          <span>by</span>
          <p class="author">${book.author}</p>
        </div>
        <button type="button" class="remove-btn" onclick='removeBook(${index})'>Remove</button>
      </div>
    `;
      // Different background for odd and even books
      if (index % 2 === 0) {
        booksContainer.lastElementChild.style.backgroundColor = '#DDD';
      } else {
        booksContainer.lastElementChild.style.backgroundColor = '#fff';
      }
    });
  }
}

export default show;

window.removeBook = removeBook; // Add to make the removeBook function global

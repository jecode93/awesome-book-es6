import addBook from './modules/addBook.js';
import showList from './modules/showList.js';
import showAdd from './modules/showAdd.js';
import showContact from './modules/showContact.js';
import Show from './modules/show.js';
import showTime from './modules/date.js';

// Add book to localStorage
const addBookButton = document.querySelector('.add-books');
addBookButton.addEventListener('click', addBook);

// Show list book section
const listBookElement = document.querySelector('#list-book');
listBookElement.addEventListener('click', showList);

// Show add book section
const addBookElement = document.querySelector('#add-new');
addBookElement.addEventListener('click', showAdd);

// Show contact section
const contactElement = document.querySelector('#contact');
contactElement.addEventListener('click', showContact);

// Hide the contact section by default
document.querySelector('.contact').style.display = 'none';
document.querySelector('.create-book').style.display = 'none';

// Show time
showTime();

// Show list book to main page
Show();
import Show from './show.js';

const showList = () => {
  document.querySelector('.books').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
  Show();
  // Hide the add book form
  document.querySelector('.create-book').style.display = 'none';
};

export default showList;
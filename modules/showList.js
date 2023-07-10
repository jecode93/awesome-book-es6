import Show from "/modules/show.js";

export const showList = () => {
  document.querySelector('.books').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
  Show();
  // Hide the add book form
  document.querySelector('.create-book').style.display = 'none';
}
export const showAdd = () => {
  document.querySelector('.create-book').style.display = 'flex';
  // Hide the list book form
  document.querySelector('.books').style.display = 'none';
  // Hide the contact
  document.querySelector('.contact').style.display = 'none';
};
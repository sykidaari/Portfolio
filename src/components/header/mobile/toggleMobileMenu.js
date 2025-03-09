export const toggleMobileMenu = () => {
  console.log('togglingggg');
  const menu = document.querySelector('#mobile-menu nav');

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
};

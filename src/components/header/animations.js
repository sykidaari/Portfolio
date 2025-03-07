export const sizeAnimation = () => {
  window.addEventListener('scroll', () => {
    const logo = document.querySelector('#logo img');

    logo.style.height = window.scrollY > 100 ? '60px' : '100px';
    logo.style.width = window.scrollY > 100 ? '60px' : '100px';
  });
};

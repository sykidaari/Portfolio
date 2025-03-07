export const mobileHeaderAnimation = () => {
  const header = document.querySelector('header');

  const logo = document.querySelector('#logo');

  const menuButton = document.querySelector('#menu-button');
  const menuImg = document.querySelector('#menu-button img');
  const menu = document.querySelector('#mobile-menu nav');

  const animation = (e) => {
    if (matchMedia('(max-width: 1024px)').matches) {
      menuImg.style.height =
        window.scrollY > 100 || e.type === 'click' ? '30px' : '40px';
      menuImg.style.width =
        window.scrollY > 100 || e.type === 'click' ? '30px' : '40px';

      if (menu.style.display === 'flex') {
        header.style.gap = '90%';
        menuImg.style.opacity = '50%';
        logo.style.opacity = '50%';
      } else if (
        window.scrollY <= 100 ||
        (e.type === 'click' && !menu.style.display === 'flex')
      ) {
        header.style.gap = '0';
        menuImg.style.opacity = '100%';
        logo.style.opacity = '100%';
      } else if (window.scrollY > 100 || e.type === 'click') {
        header.style.gap = '90%';

        menuImg.style.opacity = '50%';
        logo.style.opacity = '50%';
      }
    }
  };
  window.addEventListener('scroll', animation);
  menuButton.addEventListener('click', animation);
};

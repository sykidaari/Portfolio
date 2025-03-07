export const sizeAnimation = () => {
  window.addEventListener('scroll', () => {
    const logo = document.querySelector('#logo img');

    logo.style.height = window.scrollY > 100 ? '60px' : '100px';
    logo.style.width = window.scrollY > 100 ? '60px' : '100px';
  });
};

export const mobileHeaderAnimation = () => {
  const header = document.querySelector('header');
  const menuButton = document.querySelector('#menu-button');
  const menuImg = document.querySelector('#menu-button img');
  const menu = document.querySelector('#mobile-menu nav');

  const animation = (e) => {
    if (matchMedia('(max-width: 1024px)').matches) {
      if (menu.style.display === 'flex') {
        header.style.gap = '90%';
      } else if (window.scrollY <= 100 || e.type === 'click') {
        header.style.gap = '0';
      } else if (window.scrollY > 100 || e.type === 'click') {
        header.style.gap = '90%';
      }

      menuImg.style.height =
        window.scrollY > 100 || e.type === 'click' ? '30px' : '40px';
      menuImg.style.width =
        window.scrollY > 100 || e.type === 'click' ? '30px' : '40px';
    }
  };
  window.addEventListener('scroll', animation);
  menuButton.addEventListener('click', animation);
};

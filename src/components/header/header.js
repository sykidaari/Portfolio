import './_header.scss';
import { data } from './data';
import { createAndAppendChild } from '../../utils/domUtils/createAndAppendChild';
import { mobileHeaderAnimation, sizeAnimation } from './animations';
import { toggleMobileMenu } from './toggleMobileMenu';

export const header = () => {
  const header = createAndAppendChild('#app', 'header');

  const navbar = createAndAppendChild(header, 'nav', { id: 'navbar' });

  const navbarUl = createAndAppendChild(navbar, 'ul');

  const logoLi = createAndAppendChild(navbarUl, 'li');
  const logo = createAndAppendChild(logoLi, 'a', { href: '#logo', id: 'logo' });
  const logoIMG = createAndAppendChild(logo, 'img', {
    src: './public/assets/IMGs/logo.svg',
    alt: 'Kira Liebkind logo'
  });

  data.navbarOptions.forEach((option) => {
    const li = createAndAppendChild(navbarUl, 'li');
    const a = createAndAppendChild(li, 'a', {
      innerText: option.innerText,
      href: option.href
    });
  });

  const mobileMenu = createAndAppendChild(header, 'div', { id: 'mobile-menu' });
  const menuButton = createAndAppendChild(mobileMenu, 'button', {
    id: 'menu-button'
  });
  const menuButtonIMG = createAndAppendChild(menuButton, 'img', {
    src: data.menuButton.src,
    alt: data.menuButton.alt
  });
  const mobileNavbar = createAndAppendChild(mobileMenu, 'nav');
  const mobileNavbarUl = createAndAppendChild(mobileNavbar, 'ul');

  data.navbarOptions.forEach((option) => {
    const li = createAndAppendChild(mobileNavbarUl, 'li');
    const a = createAndAppendChild(li, 'a', {
      innerText: option.innerText,
      href: option.href
    });
  });

  menuButton.addEventListener('click', toggleMobileMenu);

  sizeAnimation();
  mobileHeaderAnimation();
};

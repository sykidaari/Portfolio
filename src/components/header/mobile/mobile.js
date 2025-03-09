import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import { data } from '../data';
import { mobileHeaderAnimation } from './animations';
import { toggleMobileMenu } from './toggleMobileMenu';
import './_mobile.scss';
import '../../header/_mediaqueries.scss';

export const mobile = () => {
  {
    const mobileMenu = createAndAppendChild('header', 'div', {
      id: 'mobile-menu'
    });
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
    mobileHeaderAnimation();

    document.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('#mobile-menu nav');
      document.addEventListener('click', (e) => {
        if (
          menu.style.display === 'flex' &&
          !menu.contains(e.target) &&
          !menuButton.contains(e.target)
        ) {
          toggleMobileMenu();
        }
      });
    });
  }
};

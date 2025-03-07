import './_header.scss';
import { data } from './data';
import { createAndAppendChild } from '../../utils/domUtils/createAndAppendChild';
import { sizeAnimation } from './animations';
import { mobile } from './mobile/mobile';

export const header = () => {
  const header = createAndAppendChild('#app', 'header');

  const navbar = createAndAppendChild(header, 'nav', { id: 'navbar' });

  const navbarUl = createAndAppendChild(navbar, 'ul');

  const logoLi = createAndAppendChild(navbarUl, 'li');
  const logo = createAndAppendChild(logoLi, 'a', { href: '#logo', id: 'logo' });
  const logoIMG = createAndAppendChild(logo, 'img', {
    src: '/assets/IMGs/logo.svg',
    alt: 'Kira Liebkind logo'
  });

  data.navbarOptions.forEach((option) => {
    const li = createAndAppendChild(navbarUl, 'li');
    const a = createAndAppendChild(li, 'a', {
      innerText: option.innerText,
      href: option.href
    });
  });

  sizeAnimation();

  mobile();
};

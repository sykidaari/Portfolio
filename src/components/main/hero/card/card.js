import './_card.scss';
import { createAndAppendChild } from '../../../../utils/domUtils/createAndAppendChild';
import { linksData } from './data';

export const card = () => {
  const card = createAndAppendChild('#hero', 'div', { id: 'card' });
  const title = createAndAppendChild(card, 'h1', { innerText: 'Kira' });
  const subTitle = createAndAppendChild(card, 'h2', {
    innerText: '<web developer/>'
  });

  const contactOptions = createAndAppendChild(card, 'ul', {
    className: 'contact-options'
  });
  linksData.forEach((element, i) => {
    const li = createAndAppendChild(contactOptions, 'li');
    const a = createAndAppendChild(li, 'a', {
      href: element.link,
      target: '_blank'
    });

    if (i === linksData.length - 1) {
      a.target = '_self';
    }

    const img = createAndAppendChild(a, 'img', { src: element.img });
  });
};

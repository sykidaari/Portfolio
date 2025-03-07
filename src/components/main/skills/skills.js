import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import { data } from './data';
import './_skills.scss';
import './_mediaqueries.scss';

export const skills = () => {
  const skills = createAndAppendChild('main', 'section', { id: 'skills' });
  const title = createAndAppendChild(skills, 'h3', {
    innerText: 'My Skills'
  });
  const ul = createAndAppendChild(skills, 'ul');

  data.forEach((element) => {
    const li = createAndAppendChild(ul, 'li');
    const img = createAndAppendChild(li, 'img', {
      src: element.src,
      alt: element.alt
    });

    const toolTipDiv = createAndAppendChild(li, 'div', {
      className: 'tooltip'
    });

    const toolTipText = createAndAppendChild(toolTipDiv, 'p', {
      innerText: element.alt
    });
  });
};

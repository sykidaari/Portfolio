import { createAndAppendChild } from '../../../../utils/domUtils/createAndAppendChild';
import './_experience.scss';
import { data } from './data';

export const experience = (parentTag) => {
  const experience = createAndAppendChild(parentTag, 'div', {
    id: 'experience'
  });
  const title = createAndAppendChild(experience, 'h3', {
    innerText: 'Experience'
  });
  const ul = createAndAppendChild(experience, 'ul');
  data.forEach((element) => {
    const li = createAndAppendChild(ul, 'li');
    const title = createAndAppendChild(li, 'h4', { innerText: element.title });
    const text = createAndAppendChild(li, 'p', { innerText: element.text });
  });
};

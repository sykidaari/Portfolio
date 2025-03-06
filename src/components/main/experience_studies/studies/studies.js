import { createAndAppendChild } from '../../../../utils/domUtils/createAndAppendChild';
import { data } from './data';

export const studies = (parentTag) => {
  const studies = createAndAppendChild(parentTag, 'div', {
    id: 'studies',
    className: 'invisible'
  });
  const title = createAndAppendChild(studies, 'h3', {
    innerText: 'Studies'
  });

  const ul = createAndAppendChild(studies, 'ul');

  data.forEach((element) => {
    const li = createAndAppendChild(ul, 'li');
    const title = createAndAppendChild(li, 'h4', { innerText: element.title });
    const text = createAndAppendChild(li, 'p', { innerText: element.text });
    const aside = createAndAppendChild(li, 'aside', {
      innerText: 'Status: '
    });
    const span = createAndAppendChild(aside, 'span', {
      innerText: element.status
    });
  });
};

import { createAndAppendChild } from '../../utils/domUtils/createAndAppendChild';

import './_footer.scss';

export const footer = () => {
  const footer = createAndAppendChild('#app', 'footer');
  const text = createAndAppendChild(footer, 'p', {
    innerText: 'Designed and built by '
  });
  const span = createAndAppendChild(text, 'span', { innerText: 'Kira' });
  const freepikCredit = createAndAppendChild(footer, 'aside', {
    innerText: 'Background images designed by '
  });
  const creditA = createAndAppendChild(freepikCredit, 'a', {
    href: 'https://www.freepik.com/',
    innerText: 'Freepik',
    target: '_blank'
  });
};

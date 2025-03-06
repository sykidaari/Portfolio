import './_experience_studies.scss';
import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import { experience } from './experience/experience';
import { studies } from './studies/studies';
import { toggleVisibility } from './toggleVisibility';

export const experience_studies = () => {
  const experience_studies = createAndAppendChild('main', 'section', {
    id: 'experience-studies'
  });
  experience(experience_studies);
  studies(experience_studies);

  const titles = experience_studies.querySelectorAll('h3');
  titles.forEach((title) => {
    title.addEventListener('click', (e) => {
      toggleVisibility(e);
    });
  });
};

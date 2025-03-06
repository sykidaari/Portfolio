import './_main.scss';
import { createAndAppendChild } from '../../utils/domUtils/createAndAppendChild';
import { hero } from './hero/hero';
import { experience_studies } from './experience_studies/experience_studies';
import { projects } from './projects/projects';
import { skills } from './skills/skills';
import { contact } from './contact/contact';

export const main = () => {
  const main = createAndAppendChild('#app', 'main');
  hero();
  skills();
  experience_studies();
  projects();
  contact();
};

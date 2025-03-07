import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import { aboutMe } from './aboutMe/aboutMe';
import { card } from './card/card';
import './_hero.scss';
import './_mediaqueries.scss';

export const hero = () => {
  const hero = createAndAppendChild('main', 'section', { id: 'hero' });
  card();
  aboutMe();
};

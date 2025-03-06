import { createAndAppendChild } from '../../../../utils/domUtils/createAndAppendChild';
import './_aboutMe.scss';

export const aboutMe = () => {
  const aboutMe = createAndAppendChild('#hero', 'div', { id: 'aboutme' });
  const title = createAndAppendChild(aboutMe, 'h3', {
    innerText: 'About Me'
  });
  const text = createAndAppendChild(aboutMe, 'p', {
    innerText:
      "Hey there! I'm a student web developer currently working on getting my skills to a professional level. As I improve, I like to keep a focus on writing clean and optimal code, constantly looking to better my practices."
  });
};

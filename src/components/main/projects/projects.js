import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import { data } from './data';
import './_projects.scss';

export const projects = () => {
  const projects = createAndAppendChild('main', 'section', {
    id: 'projects'
  });
  const title = createAndAppendChild(projects, 'h3', {
    innerText: 'My Projects'
  });
  const subTitle = createAndAppendChild(projects, 'h4', {
    innerText: "Some things i've built so far."
  });

  const ul = createAndAppendChild(projects, 'ul', {
    id: 'projects-list'
  });

  const projectsData = data.reverse();
  projectsData.forEach((element) => {
    const li = createAndAppendChild(ul, 'li', { className: 'project' });
    const cover = createAndAppendChild(li, 'img', {
      src: element.img_src,
      alt: element.title
    });
    const title = createAndAppendChild(li, 'h4', { innerText: element.title });
    const description = createAndAppendChild(li, 'p', {
      innerText: element.description
    });
    const links = createAndAppendChild(li, 'div', { className: 'links' });
    const linksUl = createAndAppendChild(links, 'ul');
    const liveLi = createAndAppendChild(linksUl, 'li');
    const liveLink = createAndAppendChild(liveLi, 'a', {
      href: element.link,
      innerText: '<live demo/>',
      target: '_blank'
    });

    const githubLi = createAndAppendChild(linksUl, 'li');
    const githubLink = createAndAppendChild(githubLi, 'a', {
      href: element.github_link,
      innerText: '<view code/>',
      target: '_blank'
    });
  });
};

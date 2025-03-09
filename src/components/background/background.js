import './_background.scss';
import { createAndAppendChild } from '../../utils/domUtils/createAndAppendChild';

export const background = () => {
  const background = createAndAppendChild('#app', 'div', { id: 'background' });
  const starContainer = createAndAppendChild(background, 'div', {
    id: 'star-container'
  });

  const numStars = 100;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const speed = Math.random() * 2 + 1;
    const floatSpeed = Math.random() * 0.5 + 1;
    const floatAmplitude = Math.random() * 3 + 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.dataset.speed = speed;
    star.dataset.floatSpeed = floatSpeed;
    star.dataset.floatAmplitude = floatAmplitude;

    starContainer.appendChild(star);
    stars.push(star);
  }

  let scrollY = 0;
  let time = 0;

  function updateStars() {
    time += 0.02;

    stars.forEach((star) => {
      const speed = parseFloat(star.dataset.speed);
      const floatSpeed = parseFloat(star.dataset.floatSpeed);
      const floatAmplitude = parseFloat(star.dataset.floatAmplitude);

      const floatOffset = Math.sin(time * floatSpeed) * floatAmplitude;

      star.style.transform = `translateY(${
        scrollY * speed * 0.1 + floatOffset
      }px)`;
    });

    requestAnimationFrame(updateStars);
  }

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  updateStars();
};

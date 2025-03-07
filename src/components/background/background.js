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
    let star = document.createElement('div');
    star.classList.add('star');
    let size = Math.random() * 3 + 1;
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let speed = Math.random() * 2 + 1;
    let floatSpeed = Math.random() * 0.5 + 1;
    let floatAmplitude = Math.random() * 3 + 2;

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
      let speed = parseFloat(star.dataset.speed);
      let floatSpeed = parseFloat(star.dataset.floatSpeed);
      let floatAmplitude = parseFloat(star.dataset.floatAmplitude);

      let floatOffset = Math.sin(time * floatSpeed) * floatAmplitude;

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

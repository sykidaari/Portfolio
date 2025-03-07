export const adjustScroll = () => {
  document.querySelectorAll('header a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      const target = document.querySelector(anchor.getAttribute('href'));

      if (!target) return;

      e.preventDefault();

      const navbarHeight = 100;

      let targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      if (link.id === 'logo') {
        targetPosition = 0;
      }
      if (link.innerText === 'About Me') {
        targetPosition -= 150;
      }

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
};

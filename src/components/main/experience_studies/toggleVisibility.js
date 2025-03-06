export const toggleVisibility = (e) => {
  if (e.target === document.querySelector('#experience h3')) {
    document.querySelector('#experience').className = '';

    document.querySelector('#studies').className = 'invisible';
  } else if (e.target === document.querySelector('#studies h3')) {
    document.querySelector('#studies').className = '';

    document.querySelector('#experience').className = 'invisible';
  }
};

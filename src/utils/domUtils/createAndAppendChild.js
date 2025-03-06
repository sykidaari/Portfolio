export const createAndAppendChild = (parent, newTag, options = {}) => {
  let parentTag;
  if (parent instanceof Element) {
    parentTag = parent;
  } else {
    parentTag = document.querySelector(parent);
  }
  const newElement = document.createElement(newTag);

  if (options.className) newElement.className = options.className;
  if (options.id) newElement.id = options.id;
  if (options.innerText) newElement.innerText = options.innerText;

  if (options.href) newElement.href = options.href;
  if (options.target) newElement.target = options.target;

  if (options.src) newElement.src = options.src;
  if (options.alt) newElement.alt = options.alt;

  if (options.type) newElement.type = options.type;
  if (options.placeholder) newElement.placeholder = options.placeholder;
  if (options.required) newElement.required = options.required;

  if (options.innerHTML) newElement.innerHTML = options.innerHTML;

  parentTag.appendChild(newElement);

  return newElement;
};

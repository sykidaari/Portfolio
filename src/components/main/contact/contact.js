import { createAndAppendChild } from '../../../utils/domUtils/createAndAppendChild';
import './_contact.scss';

export const contact = () => {
  const contact = createAndAppendChild('main', 'section', { id: 'contact' });

  const title = createAndAppendChild(contact, 'h3', {
    innerText: 'Contact Me'
  });
  const subtitle = createAndAppendChild(contact, 'h4', {
    innerText: "Let's Work"
  });
  const span = createAndAppendChild(subtitle, 'span', {
    innerText: ' Together'
  });

  const form = createAndAppendChild(contact, 'form');
  const nameInput = createAndAppendChild(form, 'input', {
    type: 'text',
    placeholder: 'Name',
    required: true
  });
  const emailInput = createAndAppendChild(form, 'input', {
    type: 'email',
    placeholder: 'Email',
    required: true
  });
  const subjectInput = createAndAppendChild(form, 'input', {
    type: 'text',
    placeholder: 'Subject',
    required: true
  });
  const messageInput = createAndAppendChild(form, 'textarea', {
    placeholder: 'Message',
    required: true
  });

  const submitButton = createAndAppendChild(form, 'button', {
    type: 'submit',
    innerText: 'Submit'
  });
};

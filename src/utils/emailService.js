import emailjs from '@emailjs/browser';

export const sendEmail = (formElement) => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error('Missing EmailJS configuration'));
  }

  return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
};

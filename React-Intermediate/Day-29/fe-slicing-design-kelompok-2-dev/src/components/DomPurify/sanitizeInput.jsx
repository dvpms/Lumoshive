import DOMPurify from 'dompurify';

function sanitizeInput(input) {

  return DOMPurify.sanitize(input);

}

export default sanitizeInput;
export default function isElementOnView(element) {
  var top = element.offsetTop;

  if (element.offsetHeight + 50 > window.innerHeight) {
    return Math.abs(top - window.pageYOffset) <
        element.offsetHeight + 50 - window.innerHeight;
  }

  return top >= window.pageYOffset &&
      element.offsetHeight + top <= window.pageYOffset + window.innerHeight;
}

export function getTextFromHtml(html) {
  const div = document.createElement('DIV');
  div.innerHTML = html;
  return div.textContent;
}

export function getShortText(text, len = 150) {
  if (text.length > len) {
      return `${text.substr(0, len)}...`;
  }
  return text;
}
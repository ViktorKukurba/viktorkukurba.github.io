export default function isElementOnView(element) {
  var top = element.offsetTop;

  if (element.offsetHeight + 50 > window.innerHeight) {
    return Math.abs(top - window.pageYOffset) <
        element.offsetHeight + 50 - window.innerHeight;
  }

  return top >= window.pageYOffset &&
      element.offsetHeight + top <= window.pageYOffset + window.innerHeight;
}
export function removeEmptyLinks(document) {
  document.querySelectorAll('a').forEach(el => {
    if (el.innerHTML === ' ' || el.innerHTML === '<b> </b>') {
      el.remove();
    }
  });
}

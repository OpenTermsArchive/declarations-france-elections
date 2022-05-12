export function removeEmptyAnchorsLinks(document) {
  Array.from(document.querySelectorAll('[href="#"]')).map(link =>
    link.removeAttribute('href'));
}

export function removeTrackingIDs(document) {
  removeQueryParam(document, 'h');
}

export function removeLocaleFromUrls(document) {
  removeQueryParam(document, 'locale2');
}

function removeQueryParam(document, queryParam) {
  document.querySelectorAll('a').forEach(el => {
    const href = el.getAttribute('href');
    const params = new URLSearchParams(href);

    if (params.has(queryParam)) {
      params.delete(queryParam);
      el.setAttribute('href', params.toString());
    }
  });
}

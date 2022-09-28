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
    const url = new URL(el.getAttribute('href'), document.location);
    const params = new URLSearchParams(url.search);

    if (params.has(queryParam)) {
      params.delete(queryParam);
      url.search = params.toString();
      el.setAttribute('href', url.toString());
    }
  });
}

export function correctRedirectUrl(document) {
  document.querySelectorAll('a').forEach(el => {
    const url = new URL(el.getAttribute('href'), document.location);
    const params = new URLSearchParams(url.search);
    const redirectionUrl = params.get('u');

    if ([ 'https://l.facebook.com', 'https://lm.facebook.com', 'https://l.instagram.com' ].includes(url.origin) && redirectionUrl) {
      el.setAttribute('href', redirectionUrl);
    }
  });
}

export function prefixUrlToFrenchVersions(document) {
  document.querySelectorAll('a').forEach(el => {
    const url = new URL(el.getAttribute('href'), document.location);

    if (url.origin == 'https://www.facebook.com/privacy/policy') {
      url.origin = 'https://fr-fr.facebook.com/privacy/policy';
    }
    el.setAttribute('href', url.toString());
  });
}

export function replaceTitleDivWithH2(document) {
  document.querySelectorAll('.qjfq86k5.ihx95mk1').forEach(el => {
    const h2 = document.createElement('h2');

    h2.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(h2, el);
  });
}

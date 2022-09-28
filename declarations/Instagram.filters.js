export function removeTrackingIDs(document) {
  removeQueryParam(document, 'h');
}

export function removeRefParam(document) {
  removeQueryParam(document, 'ref');
}

export function removeEQueryParam(document) {
  removeQueryParam(document, 'e');
}

export function removeHelprefQueryParam(document) {
  removeQueryParam(document, 'helpref');
}

export function removeLocaleQueryParam(document) {
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

    if ((url.origin == 'https://l.facebook.com' || url.origin == 'https://l.instagram.com') && redirectionUrl) {
      el.setAttribute('href', redirectionUrl);
    }
  });
}

export function avoidUrlsBlink(document) {
  [
    { from: 'https://help.instagram.com/811572406418223', to: 'https://help.instagram.com/285881641526716' },
    { from: 'https://help.instagram.com/535503073130320', to: 'http://help.instagram.com/535503073130320' },
    { to: 'https://help.instagram.com/519522125107875', from: 'https://help.instagram.com/155833707900388' },
  ].forEach(({ from, to }) => {
    document.querySelectorAll(`a[href*="${from}"]`).forEach(el => {
      el.setAttribute('href', to);
    });
  });
}

export function replaceBlockquoteByParagraph(document) {
  document.querySelectorAll('blockquote').forEach(el => {
    const p = document.createElement('p');

    p.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(p, el);
  });
}

export function replaceTitleDivWithH1(document) {
  document.querySelectorAll('.bj.bk').forEach(el => {
    const h1 = document.createElement('h1');

    h1.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(h1, el);
  });
}

export function removeSpans(document) {
  document.querySelectorAll('li > span').forEach(el => {
    el.parentNode.innerHTML = el.innerHTML;
  });

  document.querySelectorAll('li li > span').forEach(el => {
    el.parentNode.innerHTML = el.innerHTML;
  });
}

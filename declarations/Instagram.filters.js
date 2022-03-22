export function removeTrackingIDs(document) {
  removeQueryParam(document, "h");
}

export function removeEQueryParam(document) {
  removeQueryParam(document, "e");
}

function removeQueryParam(document, queryParam) {
  document.querySelectorAll("a").forEach((el) => {
    const href = el.getAttribute("href");
    const params = new URLSearchParams(href);
    if (params.has(queryParam)) {
      params.delete(queryParam);
      el.setAttribute("href", params.toString());
    }
  });
}

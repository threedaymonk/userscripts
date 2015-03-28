// ==UserScript==
// @name        Financial Times side entrance
// @namespace   https://github.com/threedaymonk/userscripts
// @description Get around the FT's Maginot Line paywall
// @include     *.ft.com/*
// ==/UserScript==

/* global document */
(() => {
  if (!document.getElementById('DRMUpsell')) { return; }
  let title = document.getElementById('headline').value;
  let query = `${ encodeURIComponent(title) }%20site:ft.com`;
  document.body.innerHTML =
    '<p>Redirecting you via Google to get round the paywall …</p>';
  document.location = `https://www.google.co.uk/search?q=${ query }`;
})();

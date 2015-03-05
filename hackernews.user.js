// ==UserScript==
// @name        Hacker News recent comments
// @namespace   https://github.com/threedaymonk/userscripts
// @description Highlight recent comments on Hacker News
// @include     https://news.ycombinator.com/item*
// ==/UserScript==

/* global document */
Array.prototype.forEach.call(
  document.getElementsByTagName('a'),
  function(anchor) {
    var matchData = anchor.innerHTML.match(/(\d+) minutes? ago/);
    if (!matchData) { return; }
    var seconds = parseInt(matchData[1], 10);
    var newness = 0.5 * Math.exp(-seconds / 30);
    var comment = anchor.parentNode.parentNode.parentNode;
    if (comment.className.match(/default/)) {
      comment.style = 'background-color: rgba(255,255,0,' + newness + ');';
    }
  }
);

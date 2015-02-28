// ==UserScript==
// @name        Hacker News recent comments
// @namespace   https://github.com/threedaymonk/userscripts
// @description Highlight recent comments on Hacker News
// @include     https://news.ycombinator.com/*
// ==/UserScript==

/* global document */
Array.prototype.forEach.call(
  document.getElementsByTagName('a'),
  function(anchor) {
    var matchData = anchor.innerHTML.match(/(\d+) minutes? ago/);
    if (!matchData) { return; }
    var newness = (60 - parseInt(matchData[1], 10)) * (0.4 / 60);
    var comment = anchor.parentNode.parentNode.parentNode;
    console.log(comment, newness);
    comment.style = 'background-color: rgba(255,255,0,' + newness + ');'
  }
);

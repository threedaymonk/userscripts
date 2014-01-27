// ==UserScript==
// @name        Make FutureLearn videos work in Firefox on Linux
// @namespace   https://github.com/threedaymonk/userscripts
// @description Use HTML5 embed code instead of Flash
// @include     *.futurelearn.com/*
// ==/UserScript==

Array.prototype.forEach.call(
  document.getElementsByTagName('iframe'),
  function(iframe){
    var videoId = iframe.src.match(/view\.vzaar\.com\/([0-9]+)\/player/)[1];
    if (!videoId) { return; }
    var video = document.createElement('video');
    video.controls = true;
    video.src = 'https://view.vzaar.com/' + videoId + '/video';
    iframe.parentNode.insertBefore(video, iframe);
    iframe.parentNode.removeChild(iframe);
  }
);

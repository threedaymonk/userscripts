// ==UserScript==
// @name        Make FutureLearn videos work in Firefox on Linux
// @namespace   https://github.com/threedaymonk/userscripts
// @description Use HTML5 embed code instead of Flash
// @include     *.futurelearn.com/*
// ==/UserScript==

Array.prototype.filter.call(
  document.getElementsByTagName('iframe'),
  function(e){
    console.log(e.src);
    return e.src.match(/view\.vzaar\.com/);
  }
).forEach(function(iframe){
  console.log(iframe);
  var videoId = iframe.src.match(/view\.vzaar\.com\/([0-9]+)\/player/)[1];
  var video = document.createElement('video');
  video.controls = true;
  video.src = 'https://view.vzaar.com/' + videoId + '/video';
  iframe.parentNode.insertBefore(video, iframe);
  iframe.parentNode.removeChild(iframe);
});

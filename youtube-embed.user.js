// ==UserScript==
// @name        Change YouTube embedded Flash to HTML5
// @namespace   https://github.com/threedaymonk/userscripts
// @description Use HTML5 embed code instead of Flash
// ==/UserScript==

/* global document */
Array.prototype.forEach.call(
  document.getElementsByTagName("embed"),
  function(embed){
    if (!embed.src.match(/youtube\.(googleapis\.)?com/)) { return; }
    var videoID = embed.src.match(/\/v\/([^&]+)/)[1];
    var iframe = document.createElement("iframe");
    iframe.width = embed.width;
    iframe.height = embed.height;
    iframe.type = "text/html";
    iframe.frameBorder = "0";
    iframe.src = "http://www.youtube.com/embed/" + videoID;
    embed.parentNode.insertBefore(iframe, embed);
    embed.parentNode.removeChild(embed);
  }
);

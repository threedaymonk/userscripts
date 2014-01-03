// ==UserScript==
// @name        Change YouTube embedded Flash to HTML5
// @namespace   https://github.com/threedaymonk/userscripts
// @description Use HTML5 embed code instead of Flash
// ==/UserScript==

Array.prototype.filter.call(
  document.getElementsByTagName("embed"),
  function(e){ return e.src.match(/youtube\.(googleapis\.)?com/) }).
  forEach(function(embed){
    var videoID = embed.src.match(/\/v\/([^&]+)/)[1];
    var iframe = document.createElement("iframe");
    iframe.width = embed.width;
    iframe.height = embed.height;
    iframe.type = "text/html";
    iframe.frameBorder = "0";
    iframe.src = "http://www.youtube.com/embed/" + videoID;
    embed.parentNode.insertBefore(iframe, embed);
    embed.parentNode.removeChild(embed);
  });

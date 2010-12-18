$(document).ready(function() {
  var BG = chrome.extension.getBackgroundPage();
  var iine = BG.getIINE();
  var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="4ZQ4" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';
  var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="4ZQ4" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';

  $('#page_title').text(iine.title || 'empty');
  $('#page_url').text(iine.url || 'empty');

  $('#buttons').append(div_iine);
  $('#buttons').append(div_cmt);
});

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */

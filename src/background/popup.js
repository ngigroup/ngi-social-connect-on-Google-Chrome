$(document).ready(function(){
  var BG = chrome.extension.getBackgroundPage();
  var iine = BG.getIINE();
  var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="4ZQ4" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';
   var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="4ZQ4" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';

$('#title').append('<div>タイトル：' + iine.title + '</div><br>');
$('#title').append('<div>URL：' + iine.url + '</div><br>');

$('#buttons').append(div_iine);
$('#buttons').append(div_cmt);
});
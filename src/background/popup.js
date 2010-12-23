var siteId = '57DZ';

$(document).ready(function() {
  var iine = chrome.extension.getBackgroundPage().getIINE();
  // tag string templates.
  var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="' + siteId + '" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';
  var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="' + siteId + '" targetUrl="' + iine.encoded_url  + 
            '" targetTitle="' + iine.title + '"></div>';
  var friend_list = '<div id="nsc_friendlist" siteId="' + siteId + '" height="300" width="300"></div>';
  var widgets_script = '<script type="text/javascript" src="http://ngi.s3.amazonaws.com/nsc-widgets.js"></script>';

  // insert page information.
  $('#page_title').text(iine.title || '(empty)');
  $('#page_url').text(iine.url || '(empty)');

  // insert iine and comment buttons.
  $('#buttons').append(div_iine);
  $('#buttons').append(div_cmt);

  // insert friend list.
  $('body').append(friend_list);

  // insert widgets script.
  window.setTimeout(function(){
    $('head').append(widgets_script);
  }, 10);
});

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */

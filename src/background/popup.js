var siteId = '57DZ';

$(document).ready(function() {
  
//  $('#sasayaki_url').click(function(){
//    chrome.tabs.getSelected(null, function(tab){
//      chrome.tabs.create({'url':'http://cr.sasayaki.tv/','selected':true, 'index':tab.index+1});
//    });
//  });
  
  chrome.extension.getBackgroundPage().get_current_page_information(function(page_info){
    // tag string templates.
    var div_iine = '<div id="nsc_iine" class="nsc_iine" siteId="' + siteId + '" targetUrl="' + encodeURIComponent(page_info.url)  + 
              '" targetTitle="' + page_info.title + '"></div>';
    var div_cmt = '<div id="nsc_comments" class="nsc_comments" siteId="' + siteId + '" targetUrl="' + encodeURIComponent(page_info.url)  + 
              '" targetTitle="' + page_info.title + '"></div>';
    var friend_list = '<div id="nsc_friendlist" siteId="' + siteId + '" height="300" width="300"></div>';
    var widgets_script = '<script type="text/javascript" src="http://ngi.s3.amazonaws.com/nsc-widgets.js"></script>';

    // insert page information.
    $('#page_title').text(page_info.title || '(empty)');
    $('#page_url').text(page_info.url || '(empty)');

    // insert iine and comment buttons.
    if (page_info.url) {
      $('#buttons').append(div_iine);
      $('#buttons').append(div_cmt);
    }

    // insert friend list.
    $('#friendlist').append(friend_list);

    // insert widgets script.
    window.setTimeout(function(){
      $('head').append(widgets_script);
    }, 10);
  });
});

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */

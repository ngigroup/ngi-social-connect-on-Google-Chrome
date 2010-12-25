function get_current_page_information(callback) {
  chrome.tabs.getSelected(undefined, function(tab){
    var page_info = {title: '', url: ''};
    var url = tab.url;
    if (/^http/.test(url) && url.length <= 255) {
      page_info = {
        title: tab.title,
        url: url
      };
    }
    callback(page_info);
  });
}
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */

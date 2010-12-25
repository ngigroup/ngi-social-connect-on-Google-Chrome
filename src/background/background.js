function get_current_page_information(callback) {
  var page_info = {title: '', url: ''};
  chrome.tabs.getSelected(undefined, function(tab){
    var url = tab.url;
    if (!/^http/.test(url)) return;
    if (url.length > 255) return;
    page_info = {
      title: tab.title,
      url: url
    };
    callback(page_info);
  });
}
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */

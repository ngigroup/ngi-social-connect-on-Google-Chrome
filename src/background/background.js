function IINE(){
}
IINE.prototype = {
  set:function _set(url, title){
    this.url = url;
    this.encoded_url = encodeURIComponent(url);
    this.title = title;
  },
  get:function _get() {
      return {url: this.url, title: this.title, encoded_url: this.encoded_url};
  }
};
var iine = new IINE();

function getIINE() {
    return iine.get();
}

var run_on_tab = function(tab){
  var url = tab.url;
  if (!/^http/.test(url)) return;
  if (url.length > 255) return;
  iine.set(tab.url, tab.title);
};

var current_window;
chrome.windows.getCurrent(function(window){
  current_window = window;
});

chrome.tabs.onSelectionChanged.addListener(function(tabid){
  chrome.tabs.get(tabid, function(tab){
    if (tab.windowId === current_window.id) {
      run_on_tab(tab);
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabid, inf){
  if (inf.status === 'loading') {
    chrome.tabs.getSelected(current_window.id, function(tab){
      run_on_tab(tab);
    });
  }
});


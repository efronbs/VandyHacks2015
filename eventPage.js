chrome.tabs.onCreated.addListener(function () {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) 
  {
    var activeTab = tabs[0];
    console.log(activeTab);
    if (activeTab.url === "https://news.ycombinator.com/")
    {
      var arr = [], l = activeTab.document.links
      for(var i=0; i<l.length; i++) 
      {
        arr.push(l[i].href);
      }
      console.log(l);
    }
  })
});

document.addEventListener('DOMContentLoaded', function() 
{
  console.log("eventPage.js loaded");
});
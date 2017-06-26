chrome.browserAction.onClicked.addListener(function(tab)
{
  chrome.tabs.create({
    url: "https://cs50.io"
  });
});

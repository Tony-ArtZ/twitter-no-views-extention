const toggle = document.querySelector("input");
window.addEventListener("load", () => {
  chrome.storage.sync.get(["activated"]).then((result) => {
    toggle.checked = result.activated;
    console.log(result);
  });
});

toggle.addEventListener("click", (e) => {
  chrome.storage.sync.set({ activated: e.target.checked });

 /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {activated:  e.target.checked}, function(response) {
    });
  });*/
});

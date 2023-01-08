chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ activated: true });
});

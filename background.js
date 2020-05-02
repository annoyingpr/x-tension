chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa756' }, function () {
        console.log("The color is blue.");
    });
}); 
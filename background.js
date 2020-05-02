chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa758' }, function () {
        console.log("The color is red.");
    });
}); 
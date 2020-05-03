chrome.storage.local.get(['uuid'], function(data) {
    // console.log(data.uuid);
    let uuid = data.uuid;
    if (uuid == null) {
        // drop the local storage cookie with the uuid from firebase
    } else {

    }
});
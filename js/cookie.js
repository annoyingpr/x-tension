var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "../x-tension-276101-d690fc3840b4.json",
    databaseURL: "https://x-tension.firebaseio.com/"
});

var ref = firebase.database().ref();
const sampleWorkStartTime = new Date().setHours(9,0,0);
const sampleWorkEndTime = new Date().setHours(17,0,0);

function newUser() {
    console.log('Creating new user...');
    var userRef = ref.push();
    let userRefKey = userRef.key;
    userRef.set({
        stepsPerDay: 10000,
        workStartTime: sampleWorkStartTime,
        workEndTime: sampleWorkEndTime
    });
    console.log(`Finished creating new user ${userRefKey}`);
    return userRefKey;
};

chrome.storage.local.get(['uuid'], function(data) {
    var uuid = data.uuid;
    if (uuid == null) {
        uuid = newUser()
        chrome.storage.local.set({
            'uuid': uuid,
        });
    }
});
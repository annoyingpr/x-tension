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

function updateUser(uuid, stepsPerDay = 10000, workStartTime = 9, workEndTime = 17) {
    console.log(`Started updating user ${uuid}...`);
    ref.child(uuid).update({
        stepsPerDay: stepsPerDay,
        workStartTime: new Date().setHours(workStartTime, 0, 0),
        workEndTime: new Date().setHours(workEndTime, 0, 0)
    })
    console.log(`Finished updating user ${uuid}`);
};

function getUserInfo(uuid) {
    console.log(`Getting info for user ${uuid}...`);
    ref.child(uuid).once('value').then(snap => {
        console.log(`Finished getting info for user ${uuid}`);
        return snap.val();
    })
}

// updateUser('-M6NvyqrcUI8Atj_39pm', 5000, 10, 20);
// getUserInfo('-M6NvyqrcUI8Atj_39pm');

// var userRef = ref.push();
// var userRefKey = userRef.key;
// console.log(userRefKey);
// userRef.set({
//     name: "Chris",
//     hobby: "hockey"
// });
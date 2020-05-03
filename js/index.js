var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "../x-tension-276101-d690fc3840b4.json",
    databaseURL: "https://x-tension.firebaseio.com/"
});

var ref = firebase.database().ref();
const sampleWorkStartTime = new Date().setHours(9,0,0);
const sampleWorkEndTime = new Date().setHours(17,0,0);

function newUser() {
    var userRef = ref.push();
    let userRefKey = userRef.key;
    userRef.set({
        stepsPerDay: 10000,
        workStartTime: sampleWorkStartTime,
        workEndTime: sampleWorkEndTime
    });
    return userRefKey;
};

function updateUser(uuid, stepsPerDay = 10000, workStartTime = 9, workEndTime = 17) {
    
};

// var userRef = ref.push();
// var userRefKey = userRef.key;
// console.log(userRefKey);
// userRef.set({
//     name: "Chris",
//     hobby: "hockey"
// });
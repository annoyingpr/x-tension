export function updateUser(uuid, stepsPerDay = 10000, workStartTime = 9, workEndTime = 17) {
    console.log(`Started updating user ${uuid}...`);
    ref.child(uuid).update({
        stepsPerDay: stepsPerDay,
        workStartTime: new Date().setHours(workStartTime, 0, 0),
        workEndTime: new Date().setHours(workEndTime, 0, 0)
    })
    console.log(`Finished updating user ${uuid}`);
};

export function getUserInfo(uuid) {
    console.log(`Getting info for user ${uuid}...`);
    ref.child(uuid).once('value').then(snap => {
        console.log(`Finished getting info for user ${uuid}`);
        return snap.val();
    });
}

// Create js for 'Submit' button which updates firebase
// Create js for 'Ergonomic tips' button which links to landing page
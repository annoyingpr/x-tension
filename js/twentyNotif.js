const WORK_START = new Date().setHours(9,0,0); // 9:00am default work start
const WORK_END = new Date().setHours(17,0,0); // 5:00pm default work end
const CURRENT_TIME = new Date();
const INTERVAL_TIME = 1200 * 1000; // 20 minute interval

function sendNotif() {
    chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
          title: 'X-Tension',
          message: 'Take a break from your screen! Look at something 20 feet away for 20 seconds.',
          iconUrl: '/x-tension_logo.png',
          type: 'basic'
        }
      })
}

if ((CURRENT_TIME >= WORK_START) && (CURRENT_TIME <= WORK_END)) {
   let notifInterval = setInterval(sendNotif, INTERVAL_TIME);
   clearInterval(notifInterval);
}


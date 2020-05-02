const workStart = new Date().setHours(9,0,0); // 9:00am default work start
const workEnd = new Date().setHours(17,0,0); // 5:00pm default work end
const currentTime = new Date();
const INTERVAL_TIME = 1200 * 1000; // 20 minute interval

function sendNotif() {
    chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
          title: 'X-Tension',
          message: 'Take a break from your screen! Look at something 20 feet away for 20 seconds.',
          iconUrl: '/icon.png',
          type: 'basic'
        }
      })
}

if ((currentTime >= workStart) && (currentTime <= workEnd)) {
    setInterval(sendNotif, INTERVAL_TIME);
}
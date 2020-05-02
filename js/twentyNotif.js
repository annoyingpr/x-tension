const workStart = new Date().setHours(9,0,0); // 9:00am default work start
const workEnd = new Date().setHours(15,0,0); // 5:00pm default work end
const currentTime = new Date();
if ((currentTime >= workStart) && (currentTime <= workEnd)) {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'X-Tension',
      message: 'Take a break from your screen! Look at something 20 feet away for 20 seconds.',
      iconUrl: '/icon.png',
      type: 'basic'
    }
  });
}
var currentDate = new Date();
var currentDateMinutes = currentDate.getMinutes()

if (currentDateMinutes >= 50 && currentDateMinutes <= 51) {
    console.log('Time to walk 250 steps');
    chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
          title: 'X-Tension',
          message: 'Time to walk 250 steps',
          iconUrl: '/x-tension_logo.png',
          type: 'basic'
        }
      });
}

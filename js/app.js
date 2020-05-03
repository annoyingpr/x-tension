var currentD = new Date();
var startHappyHourD = new Date();
startHappyHourD.setHours(15,30,0); // 5.30 pm
var endHappyHourD = new Date();
endHappyHourD.setHours(18,30,0); // 6.30 pm

if (currentD >= startHappyHourD) {
  console.log('Greet bot!');
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Hello there!',
      message: 'How great it is!',
      iconUrl: '/icons8-leaf-64.png',
      type: 'basic'
    }
  });
}
var host = 'ws://127.0.0.1:15675/ws'; // set MQTT Websockes host
var client = mqtt.connect(host); // Connect to client

Notification.requestPermission().then(function(result) {
  console.log(result);
});

client.on('connect', function() {
  console.log("Connection Successful");
  console.log('MQTT client:', host);
  client.subscribe('unikent/users/djg44/mysensor/soilmoisture');
});

var sampleNumber = 1;

client.on('message', function(topic, message) {
  console.log(message.toString());

  var value = parseInt(message.toString());
  var sample = "Sample " + sampleNumber++;

  updateFn = (updateGraph || function(){});
  updateFn(sample, value);

  if (Notification.permission === "granted" && value <= 30000) {
    var notification = new Notification("Your plant needs feeding! 🌱💦");
  } else if (Notification.permission === "granted" && value >= 55000) {
    var notification = new Notification("Your plant has been fed! 😋");
  }
  // client.end();
});

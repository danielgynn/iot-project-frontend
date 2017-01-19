var host = 'ws://127.0.0.1:15675/ws'; // set MQTT Websockes host
var client = mqtt.connect(host); // Connect to client
var visualsRoute = 'http://localhost:3000/visuals';

if (window.location.href === visualsRoute) {
  // Request permisions to send Chrome notifications
  Notification.requestPermission().then(function(result) {
    console.log(result);
  });

  // Connect to MQTT client
  client.on('connect', function() {
    console.log("Connection Successful");
    console.log('MQTT client:', host);
    client.subscribe('unikent/users/djg44/mysensor/soilmoisture');
  });

  var sampleNumber = 1;

  // Send messages
  client.on('message', function(topic, message) {
    console.log(message.toString());

    var value = parseInt(message.toString());
    var sample = "Sample " + sampleNumber++;

    // Run update graph function
    updateFn = (updateGraph || function(){});
    updateFn(sample, value);

    // Send Chrome notificatioms for edge cases
    if (Notification.permission === "granted" && value <= 30000) {
      var notification = new Notification("Your plant needs feeding! 🌱💦");
    } else if (Notification.permission === "granted" && value >= 55000) {
      var notification = new Notification("Your plant has been fed! 😋");
    }
    // client.end();
  });
}

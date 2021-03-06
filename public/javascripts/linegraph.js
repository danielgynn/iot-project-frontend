// Create a new Chart.js graph.
var ctx = document.getElementById("lineChart");
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          label: "Moisture Level",
          data: []
        }
      ]
    }
});

// Update graph data and label
function updateGraph (sampleNumber, value) {
  // push new values to the graph.
  lineChart.data.labels.push(sampleNumber);
  lineChart.data.datasets[0].data.push(value);
  
  // update
  lineChart.update();
}

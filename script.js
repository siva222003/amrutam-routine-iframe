var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Data",
        data: [11, 20, 55, 16], // Data corresponding to Y-axis labels
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#3A643B",
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          drawTicks: false,
        },
        ticks: {
          maxTicksLimit: 6,
        },
      },
      x: {
        grid: {
          drawTicks: false,
          color: (context) => console.log(context),
        },
        ticks: {
          maxTicksLimit: 4,
          padding: 14,
        },
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0, // Set minimum value
            max: 100, // Set maximum value
            stepSize: 50, // Interval between labels
            callback: function (value) {
              // Define custom labels
              const labels = { 0: "0%", 50: "50%", 100: "100%" };
              return labels[value] || "";
            },
          },
        },
      ],
    },
  },
});

window.onload = function() {
      const ctx = document.getElementById("chBar").getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["07/07", "08/07", "10/3", "08/4",
          "10/5", "10/6", "10/7", "10/8", "10/9", "10/10"],
          datasets: [{
            label: '',
            backgroundColor: '#69A7BA',
            borderColor: '#69A7BA',
            data: [1500, 900, 2000, 1500, 800, 900, 2000, 1000, 900, 900],
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        },
      });
}
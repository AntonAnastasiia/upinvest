window.onload = function() {

if(document.getElementById("chBar")) { 
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
            data: [15000, 59000, 17000, 15000, 48000, 39000, 200000, 100000, 90000, 200000],
          }]
        },
        options: {
          legend: {
            display: false
          },
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

}


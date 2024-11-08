  const chtx = document.getElementById('monthlyTargetChart').getContext('2d');
  const mTargetChart = new Chart(chtx, {
    type: 'doughnut',
    data: {
      labels: ['Target', 'Remaining', 'Achieved'],
      datasets: [{
        data: [100, 30, 70], // Example values, adjust as needed
        backgroundColor: ['#2c3e50', '#3498db', '#2ecc71'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });


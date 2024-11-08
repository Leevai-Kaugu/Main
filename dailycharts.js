const ctx = document.getElementById('dailyTargetChart').getContext('2d');
        
// Create a gradient for the line fill
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#58BA47'); // Starting color (green)
gradient.addColorStop(0.45, '#0d0e0e00');   // Ending transparent color

const targetChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0600hrs', '0900hrs', '1200hrs', '1500hrs', '1800hrs','2100hrs','0000hrs','0300hrs'],
        datasets: [{
            label: 'Collection Rate',
            data: [2000, 5000, 3000, 4500, 4000,2300,800,3500], // Example data
            fill: true,
            backgroundColor: gradient,
            borderColor: '#228B22', // Border color (green)
            tension: 0.4, // Smooth curve
        }]
    },
    options: {
        responsive: true,
        borderWidth: 1,
        pointStyle: false,
        intersect: true,
        scales: {
            y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 10000,
            },
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    display: false,
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});




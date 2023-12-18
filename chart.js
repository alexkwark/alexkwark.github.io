var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

var ctx = document.getElementById('mylinechart_1').getContext('2d');
var mylinechart_1 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [2.75, 2.8, 2.8, 2.62, 2.65, 2.54, 2.86],
            label: 'Garbage Amount',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
        }, ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quantity / 10,000 ton'
                }
            }]
        },
    },
});

var ctx = document.getElementById('mylinechart_2').getContext('2d');
var mylinechart_2 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [19.23, 20, 18.5, 22],
            label: 'Garbage Amount',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
        }, ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['1st week', '2nd week', '3rd week', '4th week'],
                scaleLabel: {
                    display: true,
                    labelString: 'Week'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quantity / 10,000 ton'
                }
            }]
        },
    },
});

var ctx = document.getElementById('mylinechart_3').getContext('2d');
var mylinechart_3 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [77, 79.2, 75, 82.3, 81, 77.7, 78.5, 80, 75, 74, 72, 68],
            label: 'Garbage Amount',
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
        }, ],
        labels: [
            '1',
            '2',
            '3',
        ],
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                type: 'category',
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quantity / 10,000 ton'
                }
            }]
        },
    },
});

var ctx = document.getElementById('myscatterchart_1').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

// Coleção com todos os gráficos
var charts = [];

// Padronização
var colors = ["#E2216B","#6937BB","#01B5F1","#00A659","#EE9722","#ED3824"];

// Dados para testes
var weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
var tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6']

// Objetos dos gráficos
var views = {
    type: 'bar',
    data: {
        labels: weekDays,
        datasets: [{
            label: "",
            data: generateRandomData(weekDays.length),
            backgroundColor: colors[0],
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
        },
        legend: {
            position: "bottom",
            display: false,
            labels: {
                fontColor: '#fff'
            }
        }
    }
}

var topTags = {
    type: 'doughnut',
    data: {
        labels: tags,
        datasets:[{
            label: 'Top Tags',
            data: generateRandomData(tags.length),
            backgroundColor: colors,
            borderColor: '#0c0d17',
            borderWidth: 3,
            borderAlign: 'inner'
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                fontColor: '#FFF'
            }
        },
        title: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}

var visits = {
    type: 'line',
    data: {
        labels: weekDays,
        datasets: [{
            label: '',
            data: generateRandomData(weekDays.length),
            borderColor: colors[2],
            pointBackgroundColor: colors[2],
            pointBorderColor: colors[2],
            fill: false,
            backgroundColor: 'rgba(0,0,0,0.0)',
            lineTension: .5
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
        },
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontColor: '#fff'
            }
        }
    }
}

// Utilitários
function generateRandomData(size){
    var data = [];
    for(var i = 0; i < size; i++){
        data.push(Math.ceil(Math.random() * 100));
    }
    return data;
}

function generateChart(ctx, config){
    var chart = new Chart(ctx, config);
    if(window.innerWidth <= 683){
        chart.aspectRatio = 2;
    }else{
        chart.aspectRatio = 1;
    }
    return chart;
}

// Chamadas
window.onload = function(){
    charts.push(generateChart(document.getElementById("week-days-views").getContext("2d"), views));
    charts.push(generateChart(document.getElementById("week-days-visits").getContext("2d"), visits));
    charts.push(generateChart(document.getElementById("top-tags").getContext("2d"), topTags));
};

window.onresize = function(){
    charts.forEach(function(chart){
        if(window.outerWidth <= 683){
            chart.aspectRatio = 2;
        }else{
            chart.aspectRatio = 1;
        }
        chart.update();
    });
}
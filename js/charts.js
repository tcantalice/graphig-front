
var colors = ["#E2216B","#6937BB","#01B5F1","#00A659","#EE9722","#ED3824"];
var weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

var dsViews = [{
    label: "Total",
    data: generateRandomData(7),
    backgroundColor: colors[0],
}]

function generateRandomData(size){
    var data = [];
    for(var i = 0; i < size; i++){
        data.push(Math.ceil(Math.random() * 100));
    }
    return data;
}

function generateChart(ctx,ds,t,lbl){
    var chart = new Chart(ctx, {
        type: t,
        data: {
            labels: lbl,
            datasets: ds,
        },
        options: {
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
                labels: {
                    fontColor: '#fff'
                }
            }
        }
    });
    chart.aspectRatio = 0;
    return chart;
}

window.onload = function(){
    generateChart(document.getElementById("week-days-views").getContext("2d"),
        dsViews, 'bar', weekDays);
};
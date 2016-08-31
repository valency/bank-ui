function draw_bar_chart(div, data, label) {
    $("#" + div).html("");
    AmCharts.makeChart(div, {
        "type": "serial",
        "theme": "light",
        "dataProvider": data,
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": label["value"]
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": label["category"],
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        }
    });
    $("a[title='JavaScript charts']").remove();
}

function draw_pie_chart(div, data, label) {
    $("#" + div).html("");
    AmCharts.makeChart(div, {
        "type": "pie",
        "theme": "light",
        "dataProvider": data,
        "valueField": label["value"],
        "titleField": label["category"],
        "labelsEnabled": false,
        "balloon": {
            "fixedPosition": true
        },
        "marginBottom": 0,
        "marginTop": 0
    });
    $("a[title='JavaScript charts']").remove();
}

function draw_line_chart(div, data, label) {
    $("#" + div).html("");
    AmCharts.makeChart(div, {
        "type": "serial",
        "theme": "light",
        "dataProvider": data,
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: [[value]]",
            "bullet": "round",
            "bulletSize": 8,
            "lineThickness": 2,
            "type": "smoothedLine",
            "valueField": label["value"]
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": label["category"],
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        }
    });
    $("a[title='JavaScript charts']").remove();
}

function draw_multi_line_chart(div, data, label) {
    $("#" + div).html("");
    var lines = [];
    for (var i = 0; i < label["value"].length; i++) {
        lines.push({
            "balloonText": label["text"][i] + ": [[value]]",
            "bullet": "round",
            "bulletSize": 8,
            "lineThickness": 2,
            "type": "smoothedLine",
            "valueField": label["value"][i]
        });
    }
    AmCharts.makeChart(div, {
        "type": "serial",
        "theme": "light",
        "dataProvider": data,
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 0.1,
        "graphs": lines,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": label["category"],
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        }
    });
    $("a[title='JavaScript charts']").remove();
}
$(document).ready(function () {
    $(".nav a[href='cust.php']").parent().addClass("active");
    $.post(API_SERVER + "data/history/get/", {
        report: API_LIST["credit_card_count"],
        conf: ""
    }, function (data) {
        draw_chart_credit_card_count("chart-credit-card-count", eval(data["result"]));
    });
    $.post(API_SERVER + "data/history/get/", {
        report: API_LIST["age_hist"],
        conf: ""
    }, function (data) {
        data = eval(data["result"]);
        draw_bar_chart("chart-age-dist", [{
            age: "<30",
            count: data[0][0]
        }, {
            age: "30-40",
            count: data[0][1]
        }, {
            age: "40-50",
            count: data[0][2]
        }, {
            age: ">50",
            count: data[0][3]
        }], {
            category: "age",
            value: "count"
        });
    });
    $.post(API_SERVER + "data/history/get/", {
        report: API_LIST["residence"],
        conf: ""
    }, function (data) {
        draw_pie_chart("chart-client-place", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    draw_bar_chart("chart-daily-savings-dist", data_daily_savings_dist, {
        category: "savings",
        value: "count"
    });
    draw_line_chart("chart-member-year-vs-daily-savings", data_member_year_vs_daily_savings, {
        category: "year",
        value: "savings"
    });
});

function draw_chart_credit_card_count(div, data) {
    AmCharts.makeChart(div, {
        "type": "serial",
        "theme": "light",
        "categoryField": 0,
        "rotate": true,
        "startDuration": 1,
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left"
        },
        "trendLines": [],
        "graphs": [{
            "balloonText": "Hold: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "title": "Hold",
            "type": "column",
            "valueField": 1
        }, {
            "balloonText": "Canceled: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "title": "Canceled",
            "type": "column",
            "valueField": 2
        }],
        "guides": [],
        "valueAxes": [{
            "position": "top",
            "axisAlpha": 0
        }],
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": data
    });
    $("a[title='JavaScript charts']").remove();
}

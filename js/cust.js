$(document).ready(function () {
    $(".nav a[href='cust.php']").parent().addClass("active");
    draw_chart_credit_card_count("chart-credit-card-count", data_credit_card_count);
    draw_bar_chart("chart-age-dist", data_age_dist, {
        category: "age",
        value: "count"
    });
    draw_pie_chart("chart-client-place", data_client_place, {
        category: "place",
        value: "count"
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
        "categoryField": "credit_card_type",
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
            "valueField": "hold"
        }, {
            "balloonText": "Canceled: [[value]]",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "title": "Canceled",
            "type": "column",
            "valueField": "canceled"
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

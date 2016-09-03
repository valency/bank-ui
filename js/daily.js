$(document).ready(function () {
    $(".nav a[href='daily.php']").parent().addClass("active");
    draw_figures();
});

function draw_figures() {
    $("#chart-deposit-withdraw").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["deposit_withdraw"],
        conf: ""
    }, function (data) {
        draw_multi_line_chart("chart-deposit-withdraw", slice_date(eval(data["result"]), 7), {
            category: 0,
            value: [1, 2, 3, 4],
            text: ["inner_out_total", "inner_in_total", " inter_out_total", " inter_in_total"]
        });
    });
    $("#chart-credit-card").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["credit_card_consume"],
        conf: ""
    }, function (data) {
        draw_line_chart("chart-credit-card", slice_date(eval(data["result"]), 7), {
            category: 0,
            value: 1
        });
    });
    $("#chart-investment").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["investment"],
        conf: ""
    }, function (data) {
        draw_multi_line_chart("chart-investment", slice_date(eval(data["result"]), 4), {
            category: 0,
            value: [1, 2, 3, 4],
            text: ["gold_total", "silver_total", "portfolio_total", "fund_total"]
        });
    });
    $("#chart-fund").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["fund"],
        conf: ""
    }, function (data) {
        data = eval(data["result"]);
        draw_pie_chart("chart-fund", [
            ["A", data[0][0]],
            ["B", data[0][1]],
            ["C", data[0][2]],
            ["D", data[0][3]]
        ], {
            category: 0,
            value: 1
        });
    });
    $("#chart-credit-card-activate").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["credit_card_activate"],
        conf: ""
    }, function (data) {
        draw_bar_chart("chart-credit-card-activate", slice_date(eval(data["result"]), 5), {
            category: 0,
            value: 1
        });
    });
}

function slice_date(data, days) {
    var d = data.slice(Math.max(data.length - days, 1));
    for (var i = 0; i < d.length; i++) {
        d[i][0] = d[i][0].substring(5);
    }
    return d;
}
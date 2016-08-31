$(document).ready(function () {
    $(".nav a[href='cust.php']").parent().addClass("active");
    draw_figures();
});

function draw_figures() {
    var conf = get_conf();
    $("#chart-credit-card-count").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["credit_card_count"],
        conf: conf
    }, function (data) {
        draw_chart_credit_card_count("chart-credit-card-count", eval(data["result"]));
    });
    $("#chart-age-dist").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["age_hist"],
        conf: conf
    }, function (data) {
        draw_bar_chart("chart-age-dist", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-client-place").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["residence"],
        conf: conf
    }, function (data) {
        draw_pie_chart("chart-client-place", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-daily-savings-dist").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["avg_saving_all_time"],
        conf: conf
    }, function (data) {
        draw_bar_chart("chart-daily-savings-dist", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-member-year-vs-daily-savings").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["year_savings"],
        conf: conf
    }, function (data) {
        draw_line_chart("chart-member-year-vs-daily-savings", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
}

function get_conf() {
    var conf = [];
    var input_cust_type = $("#input-cust-type").val();
    if (input_cust_type != "") conf.push("residence = '" + input_cust_type + "'");
    var input_cust_age = $("#input-cust-age").val();
    if (input_cust_age != "") {
        input_cust_age = input_cust_age.split(",");
        conf.push("age BETWEEN " + input_cust_age[0] + " AND " + input_cust_age[1]);
    }
    var input_cust_member_year = $("#input-cust-member-year").val();
    if (input_cust_member_year != "") {
        input_cust_member_year = input_cust_member_year.split(",");
        conf.push("years_registered BETWEEN " + input_cust_member_year[0] + " AND " + input_cust_member_year[1]);
    }
    var input_cust_daily_savings = $("#input-cust-daily-savings").val();
    if (input_cust_daily_savings != "") {
        input_cust_daily_savings = input_cust_daily_savings.split(",");
        conf.push("avg_saving_all_time BETWEEN " + input_cust_daily_savings[0] + " AND " + input_cust_daily_savings[1]);
    }
    if ($("#check-cust-internet-bank").is(':checked')) conf.push("e_bank_id > 0");
    if ($("#check-cust-mobile-bank").is(':checked')) conf.push("mobile_bank_id > 0");
    if ($("#check-cust-wechat-bank").is(':checked')) conf.push("wechat_bank_id > 0");
    if (conf.length > 0) conf = "WHERE " + conf.join(" AND ");
    conf = "WHERE_CLAUSE = \"" + conf + "\"";
    return conf;
}

function draw_chart_credit_card_count(div, data) {
    $("#" + div).html("");
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

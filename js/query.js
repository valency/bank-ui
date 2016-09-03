$(document).ready(function () {
    $(".nav a[href='query.php']").parent().addClass("active");
});

function draw_figures() {
    $(".figure-container").removeClass("hidden");
    $(".result-container").removeClass("hidden");
    $("#chart-age-dist").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["age_hist"],
        conf: "WHERE_CLAUSE = ''"
    }, function (data) {
        draw_bar_chart("chart-age-dist", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-member-year").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["years_registered"],
        conf: "WHERE_CLAUSE = ''"
    }, function (data) {
        draw_bar_chart("chart-member-year", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-client-place").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["residence"],
        conf: "WHERE_CLAUSE = ''"
    }, function (data) {
        draw_pie_chart("chart-client-place", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
    $("#chart-gender-dist").html("Loading...");
    $.post(API_SERVER + "data/history/execute/", {
        report: API_LIST["gender"],
        conf: "WHERE_CLAUSE = ''"
    }, function (data) {
        draw_pie_chart("chart-gender-dist", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
}

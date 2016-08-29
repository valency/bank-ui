$(document).ready(function () {
    $(".nav a[href='query.php']").parent().addClass("active");
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
    $.post(API_SERVER + "data/history/get/", {
        report: API_LIST["years_registered"],
        conf: ""
    }, function (data) {
        data = eval(data["result"]);
        draw_bar_chart("chart-member-year", [{
            year: "<1y",
            count: data[0][0]
        }, {
            year: "1-10y",
            count: data[0][1]
        }, {
            year: "10-20y",
            count: data[0][2]
        }, {
            year: ">20y",
            count: data[0][3]
        }], {
            category: "year",
            value: "count"
        });
    });
    $.post(API_SERVER + "data/history/get/", {
        report: API_LIST["gender"],
        conf: ""
    }, function (data) {
        draw_pie_chart("chart-gender-dist", eval(data["result"]), {
            category: 0,
            value: 1
        });
    });
});

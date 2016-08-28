$(document).ready(function () {
    $(".nav a[href='query.php']").parent().addClass("active");
    draw_bar_chart("chart-age-dist", data_age_dist, {
        category: "age",
        value: "count"
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
    draw_bar_chart("chart-member-year", data_member_year, {
        category: "year",
        value: "count"
    });
    draw_pie_chart("chart-gender-dist", data_gender_dist, {
        category: "gender",
        value: "count"
    });
});

$(document).ready(function () {
    $(".nav a[href='query.php']").parent().addClass("active");
    draw_bar_chart("chart-age-dist", data_age_dist, {
        category: "age",
        value: "count"
    });
    draw_pie_chart("chart-client-place", data_client_place, {
        category: "place",
        value: "count"
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

$(document).ready(function () {
    $(".nav a[href='daily.php']").parent().addClass("active");
    draw_multi_line_chart("chart-deposit-withdraw", data_deposit_withdraw, {
        category: "date",
        value: ["deposit", "withdraw"]
    });
    draw_multi_line_chart("chart-credit-card", data_credit_card, {
        category: "date",
        value: ["restaurant", "transport", "finance", "shopping"]
    });
    draw_multi_line_chart("chart-investment", data_investment, {
        category: "date",
        value: ["stock", "bond", "metal"]
    });
    draw_pie_chart("chart-fund", data_fund, {
        category: "fund",
        value: "amount"
    });
    draw_bar_chart("chart-credit-card-activate", data_credit_card_activate, {
        category: "date",
        value: "count"
    });
});


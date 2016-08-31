<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>云数慧金 - 金融数据一站式分析平台</title>
    <link rel="stylesheet" type="text/css" href="css/daily.css"/>
    <script type="text/javascript" src="js/daily.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <span class="chart-title">存取款业务情况</span>
            <div id="chart-deposit-withdraw"></div>
        </div>
        <div class="col-md-6">
            <span class="chart-title">信用卡消费情况</span>
            <div id="chart-credit-card"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <span class="chart-title">投资业务情况</span>
            <div id="chart-investment"></div>
        </div>
        <div class="col-md-4">
            <span class="chart-title">近两周基金投资统计</span>
            <div id="chart-fund"></div>
        </div>
        <div class="col-md-4">
            <span class="chart-title">每日信用卡激活情况</span>
            <div id="chart-credit-card-activate"></div>
        </div>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>
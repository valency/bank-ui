<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>云数慧金 - 金融数据一站式分析平台</title>
    <link rel="stylesheet" type="text/css" href="css/daily.css"/>
    <script type="text/javascript" src="js/data.js"></script>
    <script type="text/javascript" src="js/daily.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="container">
    <div class="row">
        <div class="col-md-9">
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
        <div class="col-md-3">
            <div class="form-group">
                <label class="control-label" for="input-cust-type">客户类型细分</label>
                <input type="text" class="form-control" id="input-cust-type"/>
            </div>
            <div class="form-group">
                <label class="control-label" for="input-cust-age">年龄</label>
                <input type="text" class="form-control" id="input-cust-age"/>
            </div>
            <div class="form-group">
                <label class="control-label" for="input-cust-member-year">账户持有时间（年）</label>
                <input type="text" class="form-control" id="input-cust-member-year"/>
            </div>
            <div class="form-group">
                <label class="control-label" for="input-cust-daily-savings">日均存款（元）</label>
                <input type="text" class="form-control" id="input-cust-daily-savings"/>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" id="check-cust-internet-bank"/> 网上银行</label>
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" id="check-cust-mobile-bank"/> 手机银行</label>
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" id="check-cust-wechat-bank"/> 微信银行</label>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">刷新统计信息</button>
            </div>
        </div>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>云数慧金 - 金融数据一站式分析平台</title>
    <link rel="stylesheet" type="text/css" href="css/query.css"/>
    <script type="text/javascript" src="js/data.js"></script>
    <script type="text/javascript" src="js/query.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <span class="chart-title">年龄统计分布</span>
                    <div id="chart-age-dist"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <span class="chart-title">归属地统计分布</span>
                    <div id="chart-client-place"></div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <span class="chart-title">账户持有时间统计分布</span>
                    <div id="chart-member-year"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <span class="chart-title">性别统计分布</span>
                    <div id="chart-gender-dist"></div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <p>请输入查询命令：</p>
                    <p><textarea>SELECT age, years_registered, residence, gender FROM customer_info;</textarea></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <pre>Total: 8197 Records <a class="pull-right" href="javascript:void(0)">下载数据</a></pre>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>
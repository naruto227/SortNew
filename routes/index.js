var express = require('express');
var request = require('request');
var config = require('../config.js');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/change', function (req, res) {
    //防止多次提交

    if (page == 0) {
        sub();
    } else {
        return res.json({err: '正在修改数据中...'});

    }
    return res.json({success: 'success'});
});



module.exports = router;

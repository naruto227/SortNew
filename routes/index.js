var express = require('express');
var request = require('request');
var mysql = require('mysql');
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
var config = require('../config.js');
var conn = mysql.createConnection(config.db);
var router = express.Router();
var EventEmitter = require('events').EventEmitter;
var myEvents = new EventEmitter();

var page = 0;
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

var mypretime = 0;
var isFinish = false;
exports.sub= function () {
    var Today = new Date();
    var NowHour = Today.getHours();
    var NowMinute = Today.getMinutes();
    var NowSecond = Today.getSeconds();
    var mysec = (NowHour * 3600) + (NowMinute * 60) + NowSecond;
    if ((mysec - mypretime) > 10) {
//10只是一个时间值，就是10秒内禁止重复提交，值随便设
        mypretime = mysec;
    } else {
        return;
    }
    myEvents.emit('change');
}

myEvents.on('change', function () {
    var times = [];
    for (var i = 0; i < 60; i = i + 5) {
        times.push(i);
    }

    rule.second = times;
    schedule.scheduleJob(rule, function () {
        if (isFinish) {
            page = 0;
            isFinish = false;
            this.cancel();
        } else {
            updatename();
        }
    })
});

function updatename() {
    // var sql = 'SELECT * FROM `rank`.`game_name` ORDER BY `id` DESC  LIMIT 0,50;'
    // var s = JSON.stringify(config.pool);
    // var poola = config.poola;
    // for (var i = 0; i < poola.length; i++) {
    if (page >= config.poola.length) {
        isFinish = true;
        return;
    }
    var sql = "UPDATE `game_name`  SET `sort` ='" + config.poola[i] +
        "'  WHERE `name` ='" + config.pool.poola[i] +
        "';";
    conn.query(sql,function (err, rows, fleid) {
       if(err){
           return console.log(err.message);
       } 
        console.log(rows.name);
    });
    // }
    page++;

}

module.exports = router;

/**
 * Created by hzq on 16-6-23.
 */

var schedule = require('node-schedule');
var config = require("../config.js");
var rule = new schedule.RecurrenceRule();
var EventEmitter = require('events').EventEmitter;
var myEvents = new EventEmitter();
var mysql = require('mysql');
var conn = mysql.createConnection(config.db);
var page = 0;
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
};
myEvents.on('change', function () {
    var times = [];
    for (var i = 0; i < 60; i = i + 1) {
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
    if (page >= config.pool.all.length) {
        isFinish = true;
        return;
    }
    // poola: ["我的世界", "星际争霸", " 王者荣耀", "网游前瞻", "梦幻西游", "剑灵", "传奇", "风暴英雄", "DOTA2", "三国杀", "天涯明月刀", "传奇永恒", "热门网游", "棋牌娱乐", "怀旧游戏", "魔兽争霸", "使命召唤OL",
    //     "CS:GO", "战舰世界", "炉石传说", "战争雷霆", "地下城与勇士", "英雄联盟", "主机游戏", "守望先锋", "穿越火线", "手游直播", "单机联机", "电子竞技", "网络游戏", "时尚制造", "小鲜肉", "小鲜肉", "SNH48",
    //     "女团", "鱼秀", "网络热门", "鱼教鱼乐", "生活娱乐", "绘画专区", "唱见舞见", "全民星秀", "颜值", "元气领域", "放映厅", "手机直播", "巧手工艺", "创客", "VR", "怀旧经典", "鱼音绕梁", "Music+", "数码", "体坛风云",
    //     "体育竞技", "足球竞技", "体育频道", "汽车", "汽车", "金融", "科技前沿", "自然科学", "other", "其它", "其他", "青青校园", "国漫", "高达文化区", "高达文化区", "御宅文化", "户外直播", "直击现场"]
    //     ,
    // var json = JSON.stringify(config.pool);
    // var poola = config.poola[page];
    var sql = "UPDATE `game_name`  SET `sort_new` ='" + config.pool.all[page].key +
        "'  WHERE `name` ='" + config.pool.all[page].name +
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

/**
 * Created by hzq on 16-6-23.
 */


var config = {
    debug: true,
    pool: {
        all: [
            {
                key: "我的世界", name: " 我的世界"
            }
            ,
            {
                key: "星际争霸", name: " 星际争霸"
            }
            ,
            {
                key: "网游前瞻", name: " 网络游戏"
            }
            ,
            {
                key: "梦幻西游", name: " 梦幻西游"
            }
            ,
            {
                key: "王者荣耀", name: " 王者荣耀"
            }
            ,
            {
                key: "剑灵", name: " 剑灵"
            }
            ,
            {
                key: "传奇", name: " 传奇"
            }
            ,
            {
                key: "风暴英雄", name: " 风暴英雄"
            }
            ,
            {
                key: "DOTA2", name: " DOTA2"
            }
            ,
            {
                key: "三国杀", name: " 三国杀"
            }
            ,
            {
                key: "天涯明月刀", name: " 天涯明月刀"
            }
            ,
            {
                key: "传奇永恒", name: " 传奇永恒"
            }
            ,
            {
                key: "热门网游", name: " 热门网游"
            }
            ,
            {
                key: "棋牌娱乐", name: " 棋牌"
            }
            ,
            {
                key: "怀旧游戏", name: " 怀旧游戏"
            }
            ,
            {
                key: "魔兽争霸", name: " 魔兽争霸"
            }
            ,
            {
                key: "使命召唤OL", name: " 使命召唤OL"
            }
            ,
            {
                key: "CS:GO", name: "CS:GO"
            }
            ,
            {
                key: "战舰世界", name: " 战舰世界"
            }
            ,
            {
                key: "炉石传说", name: " 炉石传说"
            }
            ,
            {
                key: "战争雷霆", name: " 战争雷霆"
            }
            ,
            {
                key: "地下城与勇士", name: " 地下城与勇士"
            }
            ,
            {
                key: "英雄联盟", name: " 英雄联盟"
            }
            ,
            {
                key: "主机游戏", name: " 单机游戏"
            }
            ,
            {
                key: "守望先锋", name: " 守望先锋"
            }
            ,
            {
                key: "穿越火线", name: " 穿越火线"
            }
            ,
            {
                key: "手游直播", name: " 手游"
            }
            ,
            {
                key: "单机联机", name: " 单机游戏"
            }
            ,
            {
                key: "电子竞技", name: " 电子竞技"
            }
            ,
            {
                key: "网络游戏", name: " 网络游戏"
            }
            ,
            {
                key: "时尚制造", name: "时尚"
            }
            ,
            {
                key: "小鲜肉", name: "真人秀"
            }
            ,
            {
                key: "SNH48", name: "音乐"
            }
            ,
            {
                key: "女团", name: "音乐"
            }
            ,
            {
                key: "鱼秀", name: "真人秀"
            }
            ,
            {
                key: "网络热门", name: "娱乐"
            }
            ,
            {
                key: "鱼教鱼乐", name: "娱乐"
            }
            ,
            {
                key: "生活娱乐", name: "娱乐"
            }
            ,
            {
                key: "绘画专区", name: "绘画"
            }
            ,

            {
                key: "唱见舞见", name: "真人秀"
            }
            ,
            {
                key: "全民星秀", name: "真人秀"
            }
            ,
            {
                key: "颜值", name: "真人秀"
            }
            ,
            {
                key: "元气领域", name: "真人秀"
            }
            ,
            {
                key: "放映厅", name: "真人秀"
            }
            ,
            {
                key: "手机直播", name: "直播"
            }
            ,
            {
                key: "巧手工艺", name: "巧手工艺"
            }
            ,
            {
                key: "创客", name: "创客"
            }
            ,
            {
                key: "VR", name: "VR"
            }
            ,
            {
                key: "怀旧经典", name: "怀旧经典"
            }
            ,
            {
                key: "鱼音绕梁", name: "真人秀"
            }
            ,
            {
                key: "Music+", name: "音乐"
            }
            ,
            {
                key: "数码", name: "数码"
            }
            ,
            {
                key: "体坛风云", name: "体育"
            }
            ,
            {
                key: "体育竞技", name: "体育"
            }
            ,
            {
                key: "足球竞技", name: "足球"
            }
            ,
            {
                key: "体育频道", name: "体育"
            }
            ,
            {
                key: "汽车", name: "汽车"
            }
            ,
            {
                key: "金融", name: "金融"
            }
            ,
            {
                key: "科技前沿", name: "科技前沿"
            }
            ,
            {
                key: "自然科学", name: "自然科学"
            }
            ,
            {
                key: "other", name: "其他"
            }
            ,
            {
                key: "其它", name: "其他"
            }
            ,
            {
                key: "其他", name: "其他"
            }
            ,
            {
                key: "青青校园", name: "青青校园"
            }
            ,
            {
                key: "国漫", name: "国漫"
            }
            ,
            {
                key: "高达文化区", name: "高达文化区"
            }
            ,
            {
                key: "御宅文化", name: "御宅文化"
            }
            ,
            {
                key: "户外直播", name: "直播"
            }
            ,
            {
                key: "直击现场", name: "直播"
            }
        ]

    }
    ,

    db: {
        host: 'rm-2zee5eu70c10m7ubu.mysql.rds.aliyuncs.com',
        user: 'dataguiding',
        password: 'redhat2016',
        database: 'rank',
        port: 3306
    }
}

module.exports = config;

// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "你好哇，洪姝逸！",
        "MY HONEY",//beauty
        "今天是你的生日！",
        "也是我们在一起的",//italia
        "第48天了哦~",//love
        "你知道吗",
        "这些日子里",
        "我每天都很想你",//shadow
        "你也很想我叭~",
        "我好想念",
        "和你漫步在北京街头的那几天",//mt
        "我好希望",
        "能快点再和你见面",//clould
        "虽然相隔万里",//plane
        "但是",
        "我能感受到",
        "我们之间的距离",
        "并没有因此变远",//airport
        "甚至",
        "变得更近了呢",//shoes
        "我们还有十个月才能再见面",//alley
        "但是别担心！",
        "我会一直在家里等你回来的！",//lake
        "有好多好多的事情",
        "想和你一起去完成",
        "有好多好多话",
        "想对你说",
        "纸短情长",
        "那就先",
        "祝你在London过的开心",//street
        "好好玩也要好好学习哦~",//church
        "祝你快乐，不只生日",
        "祝你快乐，尤其生日",
        "Happy birthday~",
        "my sweetheart",//kiss
        "Yours",
        "石佳玥",//riverme
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        
        "MY HONEY": "./imgs/beauty.jpg",
        "也是我们在一起的" : "./imgs/italia.jpg",
        "第48天了哦~": "./imgs/love.jpg",
        "我每天都很想你":"./imgs/shadow.jpg",
        "和你漫步在北京街头的那几天":"./imgs/mt.jpg",
        "能快点再和你见面" : "./imgs/clould.jpg",
        "变得更近了呢" : "./imgs/shoes.jpg",
        "我们还有十个月才能再见面" : "./imgs/alley.jpg",
        "我会一直在家里等你回来的！" : "./imgs/lake.jpg",
        "虽然相隔万里" : "./imgs/plane.jpg",
        "并没有因此变远" : "./imgs/airport.jpg",
        "祝你在London过的开心":"./imgs/street.jpg",
         "好好玩也要好好学习哦~" : "./imgs/church.jpg",
        "my sweetheart":"./imgs/kiss.jpg",
        "石佳玥":"./imgs/riverme.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "试着点一下~",
        play: "来点音乐~",
        bannar_coming: "来点氛围感哦~",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐呀宝~",
        story: "A MESSAGE FOR YOU",
    }
};

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
        "这段时间下来",
        "你已经成为了我的习惯", // shadow
        "习惯给你分享我的生活",
        "习惯每天给你打电话",
        "习惯每天和你说一些",
        "只想对你说的话",
        "习惯每天入睡前和你说：",
        "爱你哦~",// loveyou
        "我很想你",
        "每次想你的时候",
        "会看你的照片",
        "听你的语音",
        "一遍又一遍",
        "我好想念", //lake
        "和你漫步在北京街头的那几天",//mt
        "我好希望",
        "我们能快点再见",//clould
        "虽然相隔万里",//plane
        "但是",
        "我能感受到",//airport
        "我们之间的距离",//videoPhone
        "并没有因此变远",//videoLondon
        "甚至",
        "变得更近了呢",//videoLove
        "也许还有十个月才能再见",//alley
        "但是别担心！",
        "我会一直等你回来的！",//shoes
        "有好多好多的事",
        "想和你一起去做",
        "有好多好多话",
        "想对你说",
        "纸短情长",
        "那就先",
        "祝你在London过的开心",//street
        "好好玩也要好好学习哦~",//church
        "我一直都在！",//green
        "Happy birthday~",
        "my sweetheart",//kiss
        "Yours",
        "石佳玥",//riverme
        "爱你！",
        "等一下下，再说一点心里话：",
        "好幸运",
        "我能遇到你啊",
        "但你知道的",
        "我的野心有时也是很大的",
        "我很贪心",
        "我不只想要你的爱情",
        "我也想带着你一起",
        "过一过更好的人生！",//cuteCat
        "最后I wanna say：",
        "斯人若彩虹，遇上方知有~",
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
        "你已经成为了我的习惯":"./imgs/shadow.jpg",
        "爱你哦~":"./imgs/loveyou.jpg",
//         "我每天都很想你":"./imgs/shadow.jpg",
        "我好想念":"./imgs/lake.jpg",
        "和你漫步在北京街头的那几天":"./imgs/mt.jpg",
        "我们能快点再见" : "./imgs/clould.jpg",
        "变得更近了呢" : "./imgs/videoLove.jpg",
        "也许还有十个月才能再见" : "./imgs/alley.jpg",
        "我会一直在家里等你回来的！" : "./imgs/shoes.jpg",
        "虽然相隔万里" : "./imgs/plane.jpg",
        "我能感受到" : "./imgs/airport.jpg",
        "我们之间的距离" : "./imgs/videoPhone.jpg",
        "并没有因此变远" : "./imgs/videoLondon.jpg",
        "祝你在London过的开心":"./imgs/street.jpg",
        "好好玩也要好好学习哦~" : "./imgs/church.jpg",
        "我一直都在！" : "./imgs/green.jpg",
        "my sweetheart":"./imgs/kiss.jpg",
        "石佳玥":"./imgs/riverme.jpg",
        "过一过更好的人生！":"./imgs/cuteCat.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "准备好了就开始叭",
        play: "来点音乐~",
        bannar_coming: "把这里装饰一下叭",
        balloons_flying: "好像少点东西",
        cake_fadein: "来个蛋糕",
        light_candle: "再点个蜡烛",
        wish_message: "生日快乐呀宝~",
        story: "有一封信待查收",
    }
};

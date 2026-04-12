const quizData = {
  questions: [
    {
      question: "當你決定要跟隨白沙屯媽祖進香時，你第一件放進背包的物品是什麼？",
      options: [
        { text: "御守或平安符", value: "A" },
        { text: "實用的醫藥包與痠痛貼布", value: "B" },
        { text: "給路上「香燈腳」分享的小零食", value: "C" },
        { text: "一本記錄心情的小本子", value: "D" }
      ]
    },
    {
      question: "走在龐大的進香隊伍中，天氣突然變得炎熱異常，你的反應是？",
      options: [
        { text: "咬牙堅持，告訴自己這點苦算什麼", value: "A" },
        { text: "尋找陰涼處稍作休息，理性評估體力", value: "B" },
        { text: "拿出隨身攜帶的扇子，順便幫身旁的人煽風", value: "C" },
        { text: "覺得這正是考驗心志的好時機，內心反而平靜", value: "D" }
      ]
    },
    {
      question: "媽祖的「粉紅超跑」突然在一個不起眼的岔路口停下，你心裡第一個念頭是？",
      options: [
        { text: "媽祖一定有祂神奇且溫暖的安排", value: "A" },
        { text: "趕緊拿出手機記錄這特別、充滿未知的一刻", value: "D" },
        { text: "敏銳地四處觀察，猜測是否有需要幫助的人", value: "C" },
        { text: "趁大家停下，趕緊調整自己的裝備與氣息", value: "B" }
      ]
    },
    {
      question: "路上遇到熱情的當地居民發放免費素食便當，但數量似乎快不夠了，你會？",
      options: [
        { text: "主動退讓，讓給後方看起來更疲憊的香客", value: "A" },
        { text: "主動過去詢問居民是否需要幫忙分發", value: "C" },
        { text: "默默離開，靠自己尋找其他的食物來源", value: "B" },
        { text: "雙手合十，用感恩的心謝謝他們的無私發心", value: "D" }
      ]
    },
    {
      question: "沿途中，有些香客因為腳起水泡而走不下去，剛好在你的身邊，你會怎麼作？",
      options: [
        { text: "立刻停下來幫他包紮或遞上隨身藥膏", value: "B" },
        { text: "放慢腳步陪他聊聊天，用精神鼓勵他分散疼痛", value: "C" },
        { text: "幫他尋找醫療車或交管志工的協助", value: "A" },
        { text: "默默為他祈福，並將堅持化作自己前進的動力", value: "D" }
      ]
    },
    {
      question: "終於抵達北港朝天宮，看著香火鼎盛的畫面，你最想對媽祖說什麼？",
      options: [
        { text: "祈求身邊的家人朋友平平安安、順心如意", value: "A" },
        { text: "感謝這一路上的平安與疲憊，讓我看見不一樣的自己", value: "B" },
        { text: "承諾會將這份正能量與善意，帶回未來的日常生活中", value: "C" },
        { text: "什麼都不求，只想閉上眼靜靜感受這份寧靜與神聖", value: "D" }
      ]
    }
  ],
  results: {
    A: {
      title: "【燈塔願力】",
      desc: "你的內心充滿包容與善意。在人生的進香路上，你總是像一盞溫柔的燈塔，不自覺地照顧著周遭的人。即使自己疲憊，看著別人展露笑容，就是你最強大的前進動力。",
      prompt: "Watercolor painting of a gentle lighthouse emitting soft golden light at dusk, surrounded by flying traditional red lanterns. Warm, soothing, and atmospheric, pastel color palette, soft brush strokes, masterpiece."
    },
    B: {
      title: "【磐石願力】",
      desc: "你擁有無比堅韌的心智與務實的行動力。面對人生的未知與高溫挑戰，你懂得冷靜配速、紮實踩穩每一步。你的願力在於踏實完成目標，是大家身邊最可靠的安定力量。",
      prompt: "Watercolor painting of a solid stone path leading towards a traditional temple gate at sunrise, glowing with hope. Warm sunlight, calm and grounded atmosphere, detailed watercolor wash, serene and beautiful."
    },
    C: {
      title: "【微風願力】",
      desc: "你生性開朗、熱情且善於結緣。你的願力像是春日裡的微風，走到哪裡都能吹散別人的疲憊，帶來生機與歡笑。在人生的旅途中，你用無私的分享為這個世界注入了滿滿的活力。",
      prompt: "Watercolor illustration of a gentle spring breeze blowing through blooming cherry blossoms near a traditional Taiwanese temple roof. Vibrant yet soft colors, highly expressive watercolor splashes, joyful and lively."
    },
    D: {
      title: "【星芒願力】",
      desc: "你有著深邃的內省能力與對萬物的共鳴。比起外在的熱鬧，你更專注於內心與神聖的對話。你的願力如夜空中的星芒，清澈閃耀，總能在喧囂的世界中看透事物的本質。",
      prompt: "Watercolor art of a quiet starry night sky over a silhouette of a traditional temple. Glowing stars, deep indigo and warm yellow tones, spiritual and ethereal, soft and dreamy watercolor texture."
    }
    // 註：A為最多的情況、B為務實、C為分享、D為內省。(為簡化計分均分為 ABCD 四大類與第五隱藏類，預設4類)
  },
  ads: [
    {
      title: "明星3缺1",
      description: "台灣最多人玩16張麻將，1秒湊桌全真人線上打麻將！知名藝人正版授權，等你來+1。",
      icon: "https://www.gametower.com.tw/images/index/games/pic_iStar31.png",
      url: "https://www.gametower.com.tw/Games/FreePlay/Mj/star31/?utm_source=baishatun-mazu-quiz&utm_medium=display&utm_campaign=mega_traffic_2026&utm_content=1rd_banner"
    },
    {
      title: "玩星派對",
      description: "全台第一休閒娛樂平台，收納各種類型的休閒遊戲讓您盡情暢玩！豐富的養成元素，培養專屬二次元角色。",
      icon: "https://www.gametower.com.tw/images/index/games/pic_pg.png",
      url: "https://www.gametower.com.tw/Games/PG/?utm_source=baishatun-mazu-quiz&utm_medium=display&utm_campaign=mega_traffic_2026&utm_content=2rd_banner"
    }
  ]
};

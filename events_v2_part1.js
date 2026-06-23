const EVENTS_V2_PART1 = {
  // Day 1: 5/20 周三 - 520情人节 + 入职日
  day1: {
    morning: [
      {
        id: 'd1_m1',
        text: '520情人节这天入职，安检大哥扫了你工牌后露出意味深长的微笑。HR小姐姐在大厅等你："520来报到！缘分啊~"旁边经过的同事纷纷侧目，你感觉自己像被全公司围观的单身狗。',
        choices: [
          { text: '尴尬但礼貌微笑', effects: { fishing: 0, performance: 2, happy: 1, social: 3 } },
          { text: '自嘲"注孤生报到"', effects: { fishing: 2, performance: 0, happy: 4, social: 5 } },
          { text: '低头快步走别看我', effects: { fishing: 3, performance: -1, happy: -1, social: -2 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd1_m2',
        gender: 'male',
        text: '领工牌时HR说"今天入职的都是有缘人"，旁边还有个同时入职的实习生——工牌上写着"俞闲"。她随口说了句"520入职也是没谁了"，旁边几个正式员工都笑了。',
        choices: [
          { text: '跟着笑"确实离谱"', effects: { fishing: 0, performance: 0, happy: 3, social: 4 } },
          { text: '假装没听到', effects: { fishing: 1, performance: 1, happy: 1, social: 2 } },
          { text: '"至少发了巧克力"', effects: { fishing: 2, performance: -1, happy: 5, social: 5 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd1_m2f',
        gender: 'female',
        text: '领工牌时HR说"今天入职的都是有缘人"，旁边还有个同时入职的男生实习生——"余默"。他看起来比你还紧张，连工牌都挂反了。你好心提醒了他一句。',
        choices: [
          { text: '"工牌反了哦"', effects: { fishing: 0, performance: 0, happy: 2, social: 4 } },
          { text: '假装没看到别社交了', effects: { fishing: 2, performance: 1, happy: 1, social: 0 } },
          { text: '"520入职，我们真是命苦"', effects: { fishing: 1, performance: -1, happy: 4, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd1_n1',
        gender: 'female',
        text: '食堂今天搞了个"520情人节特餐"——心形牛排、粉色甜点。你一个人端着餐盘有点尴尬。好在余默也是一个人，你俩互相看到了，自然而然坐一起吐槽："520还得上班，资本家没有心。"',
        choices: [
          { text: '一起吐槽公司', effects: { fishing: 1, performance: 0, happy: 4, social: 5 } },
          { text: '点外卖回工位吃', effects: { fishing: 4, performance: 1, happy: 0, social: -2 } },
          { text: '厚脸皮点双人套餐自己吃', effects: { fishing: 3, performance: -1, happy: 5, social: 1 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd1_n1m',
        gender: 'male',
        text: '食堂今天搞了个"520情人节特餐"——心形牛排、粉色甜点。你一个人端着餐盘格格不入。导师路过拍你肩膀："别站着，跟我们坐。"一桌全是组里的人，你开始了第一顿社交午饭。',
        choices: [
          { text: '努力融入聊天', effects: { fishing: -1, performance: 1, happy: 2, social: 5 } },
          { text: '闷头吃饭少说话', effects: { fishing: 2, performance: 0, happy: 0, social: 1 } },
          { text: '找机会问组里的情况', effects: { fishing: -1, performance: 2, happy: 1, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd1_a1',
        text: '导师带你到工位，全新MacBook已经摆好了。"先装环境吧，wiki有文档。"你正准备开工，行政姐姐推着小车过来发巧克力："520福利~每人一盒！"导师接过巧克力看了你一眼："装环境还是吃巧克力，你选。"',
        choices: [
          { text: '先装环境再说', effects: { fishing: -5, performance: 7, happy: -1, social: 0 } },
          { text: '边吃巧克力边装', effects: { fishing: 3, performance: 3, happy: 4, social: 0 } },
          { text: '分巧克力给周围同事', effects: { fishing: 1, performance: 0, happy: 3, social: 6 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd1_a2',
        text: '装环境到一半卡住了，报了个从没见过的错。你google了半天没结果，俞闲从后面探过头来："这个我刚踩过坑，要改个配置文件。"她顺手帮你解决了。',
        choices: [
          { text: '"谢谢！回头请你喝奶茶"', effects: { fishing: 0, performance: 2, happy: 3, social: 5 } },
          { text: '记下解决方法认真学', effects: { fishing: -3, performance: 5, happy: 1, social: 2 } },
          { text: '"大佬带带我"', effects: { fishing: 2, performance: 1, happy: 2, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 2: 5/21 周四 - 正式上班第一天
  day2: {
    morning: [
      {
        id: 'd2_m1',
        text: '正式上班第一天！闹钟响了三遍，你从床上弹起来看了眼时间——8:47。公司9点打卡通勤40分钟，数学告诉你已经迟到了。但你想起HR说过"弹性打卡9:30前都行"。',
        choices: [
          { text: '慢悠悠地出门', effects: { fishing: 5, performance: -3, happy: 4, social: 0 } },
          { text: '狂飙赶9点到', effects: { fishing: -5, performance: 5, happy: -3, social: 0 } },
          { text: '打车！实习工资先预支', effects: { fishing: -1, performance: 3, happy: 0, social: 0 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd2_m2',
        text: '第一次参加早会，所有人轮流说昨天做了什么、今天要做什么。轮到你——你昨天就装了个环境还吃了盒巧克力，说什么好呢？',
        choices: [
          { text: '"熟悉项目环境中"', effects: { fishing: 3, performance: 2, happy: 1, social: 0 } },
          { text: '如实说只装了环境', effects: { fishing: -2, performance: 3, happy: -1, social: 2 } },
          { text: '"学习了很多收获很大"', effects: { fishing: 4, performance: -1, happy: 2, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd2_n1',
        text: '午休时间你开始探索办公区。茶水间有免费零食和咖啡机，尽头有个安静角落连监控都照不到。你的摸鱼雷达疯狂作响——这简直是带薪休息的天堂！',
        choices: [
          { text: '记住这个宝藏位置', effects: { fishing: 6, performance: -2, happy: 5, social: 0 } },
          { text: '老实在工位午休', effects: { fishing: -3, performance: 3, happy: 0, social: 0 } },
          { text: '拉同事一起去探索', effects: { fishing: 3, performance: -1, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd2_a1',
        text: '导师甩过来一个链接："先看看这个项目文档，大概200页，有问题随时问。"打开一看——密密麻麻的技术文档，上次更新是两年前。俞闲路过瞄了一眼："哈，这文档我当初也看了一周。"',
        choices: [
          { text: '逐字逐句看文档', effects: { fishing: -7, performance: 8, happy: -4, social: 0 } },
          { text: '直接看代码更快', effects: { fishing: -2, performance: 5, happy: 0, social: 0 } },
          { text: '开着文档实际摸鱼', effects: { fishing: 8, performance: -5, happy: 4, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 3: 5/22 周五 - 第一个周五，触发小游戏
  day3: {
    morning: [
      {
        id: 'd3_m1',
        text: '周五！空气里弥漫着快乐的分子。早会上leader突然说："趁这周大家都在，开个需求规划会吧。"产品经理开始口若悬河地画饼——"下季度要做行业第一""用户量翻倍""AI赋能一切"。',
        choices: [
          { text: '认真听记笔记', effects: { fishing: -4, performance: 5, happy: -2, social: 1 } },
          { text: '表面认真实则放空', effects: { fishing: 5, performance: -1, happy: 3, social: 0 } },
          { text: '偷偷和你对视翻白眼', effects: { fishing: 3, performance: -2, happy: 4, social: 4 } },
        ],
        triggerMiniGame: 'bubble',
      }
    ],
    noon: [
      {
        id: 'd3_n1',
        text: '中午大家聊起周末计划，办公区的摸鱼氛围已经开始升温了。有人在偷偷看机票，有人已经开始收拾包，虽然才12点。有人说周末要打游戏通宵，俞闲说约了朋友去看展。',
        choices: [
          { text: '加入周末话题闲聊', effects: { fishing: 4, performance: -2, happy: 4, social: 5 } },
          { text: '趁大家聊天偷偷午睡', effects: { fishing: 5, performance: -1, happy: 3, social: 0 } },
          { text: '利用午休多写点代码', effects: { fishing: -5, performance: 6, happy: -2, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd3_a1',
        text: '周五下午3点，办公区安静得诡异。你偷偷环顾四周：左边在逛淘宝，右边在看小说，对面把游戏窗口调成了IDE大小。这就是传说中的"周五下午，人在心不在"。',
        choices: [
          { text: '加入摸鱼大军', effects: { fishing: 8, performance: -5, happy: 6, social: 2 } },
          { text: '提前完成下周任务', effects: { fishing: -6, performance: 8, happy: 0, social: 0 } },
          { text: '帮同事挡着然后一起摸', effects: { fishing: 5, performance: -2, happy: 5, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 4: 5/23 周六 ★周末
  day4: {
    morning: [
      {
        id: 'd4_m1',
        text: '实习后的第一个周末！你睡到阳光晒屁股才醒，看了眼手机——11点。外面天气不错，但被窝更香。你伸了个懒腰，感受着不用打卡的幸福感。',
        choices: [
          { text: '继续躺着刷手机', effects: { fishing: 7, performance: -3, happy: 6, social: 0 } },
          { text: '起来做个早午餐', effects: { fishing: 3, performance: 0, happy: 4, social: 0 } },
          { text: '出门觅食顺便逛逛', effects: { fishing: 2, performance: 0, happy: 5, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd4_n1',
        text: '正当你享受周末时光，手机突然震了——导师发来消息："在吗？"互联网打工人最怕的两个字出现了！你的心跳加速，是有bug？还是要加班？还是……',
        choices: [
          { text: '秒回"在的！"', effects: { fishing: -4, performance: 5, happy: -3, social: 1 } },
          { text: '假装没看到', effects: { fishing: 6, performance: -4, happy: 2, social: -2 } },
          { text: '等5分钟再回', effects: { fishing: 2, performance: 2, happy: 0, social: 0 } },
        ],
        triggerMiniGame: 'decode',
      }
    ],
    afternoon: [
      {
        id: 'd4_a1',
        text: '解码完消息，原来导师只是让你周一记得把昨天的代码push一下，虚惊一场。剩下的周六下午是属于你的！实习生群里有人在约下午打球，也有人说在家打游戏。',
        choices: [
          { text: '出门打球社交', effects: { fishing: 2, performance: 0, happy: 5, social: 6 } },
          { text: '宅家打游戏', effects: { fishing: 6, performance: -2, happy: 6, social: 1 } },
          { text: '提前看看下周的需求', effects: { fishing: -5, performance: 6, happy: -1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 5: 5/24 周日 ★周末
  day5: {
    morning: [
      {
        id: 'd5_m1',
        text: '周日早上，你在"周日恐惧症"和"今天还能浪"之间反复横跳。打开手机看到实习生群里有人发了周末加班的照片，配文"卷不动了"。你有一点点内疚，但身体很诚实地没动。',
        choices: [
          { text: '关掉手机继续躺', effects: { fishing: 7, performance: -4, happy: 5, social: -1 } },
          { text: '回一句"辛苦了大佬"', effects: { fishing: 4, performance: -1, happy: 2, social: 3 } },
          { text: '有点焦虑打开电脑学习', effects: { fishing: -5, performance: 6, happy: -3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd5_n1',
        text: '中午点了外卖窝在沙发上看剧。突然想起还没有整理这周的工作笔记，导师说周一要聊聊这周的收获。是现在整理还是明天早上再说？',
        choices: [
          { text: '明天再说继续看剧', effects: { fishing: 6, performance: -3, happy: 5, social: 0 } },
          { text: '花半小时简单整理', effects: { fishing: -2, performance: 4, happy: 1, social: 0 } },
          { text: '发消息问俞闲怎么写', effects: { fishing: 1, performance: 2, happy: 2, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd5_a1',
        text: '周日下午四点，"明天要上班"的现实感越来越强。你开始纠结要不要提前准备一下明天的工作，还是把最后的自由时光用在快乐的事情上。你在群里发："有人明天要一起坐地铁吗？"',
        choices: [
          { text: '约你明天一起通勤', effects: { fishing: 1, performance: 1, happy: 2, social: 5 } },
          { text: '抓紧最后时光打游戏', effects: { fishing: 6, performance: -3, happy: 5, social: 0 } },
          { text: '早睡早起明天精神好', effects: { fishing: -3, performance: 5, happy: 0, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 6: 5/25 周一
  day6: {
    morning: [
      {
        id: 'd6_m1',
        text: '周一清晨，闹钟是世界上最残忍的发明。你在被窝里和自己谈判了15分钟才爬起来。到公司茶水间排满了冲咖啡的人，每个人脸上都写着四个大字：不想上班。',
        choices: [
          { text: '咖啡续命后再说', effects: { fishing: 3, performance: 1, happy: 1, social: 2 } },
          { text: '打起精神先开工', effects: { fishing: -4, performance: 5, happy: -2, social: 0 } },
          { text: '在工位发呆十分钟', effects: { fishing: 5, performance: -3, happy: 2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd6_n1',
        text: '午饭时观察到有趣现象：周一中午所有人说话声音比平时小，笑容少了50%，叹气频率上升200%。食堂阿姨都看出来了："同学咋蔫了？多打点肉给你。"',
        choices: [
          { text: '感谢阿姨多吃点', effects: { fishing: 2, performance: 0, happy: 4, social: 2 } },
          { text: '和同事吐槽周一', effects: { fishing: 3, performance: -1, happy: 2, social: 4 } },
          { text: '默默吃完回去干活', effects: { fishing: -2, performance: 3, happy: -1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd6_a1',
        text: '下午收到三封邮件：产品改需求了、测试环境挂了、leader约你明天聊聊。你感觉周末攒的快乐值瞬间清零。同事看你脸色不好："别慌，leader找你聊可能是好事。"',
        choices: [
          { text: '先处理最紧急的事', effects: { fishing: -5, performance: 7, happy: -2, social: 0 } },
          { text: '去茶水间缓缓再说', effects: { fishing: 4, performance: -2, happy: 2, social: 1 } },
          { text: '问你要不要一起加班', effects: { fishing: 1, performance: 2, happy: 1, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd6_o1',
        text: '7点了，工位上还亮着不少灯。你的任务还没做完，旁边同事已经点了外卖准备持久战。估计还要一两个小时。',
        choices: [
          { text: '效率拉满速战速决', effects: { fishing: -6, performance: 8, happy: -2, social: 0 } },
          { text: '慢慢磨摸鱼式加班', effects: { fishing: 5, performance: 2, happy: 1, social: 0 } },
          { text: '问同事要不要拼外卖', effects: { fishing: 2, performance: 1, happy: 3, social: 5 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd6_o2m',
        gender: 'male',
        text: '加班到一半，leader路过看了眼你的屏幕："还行，进度不错。对了那个服务器要搬一下机器，你明天帮个忙呗，搬几台主机。"好家伙，码农还得当搬运工。',
        choices: [
          { text: '"好的没问题"', effects: { fishing: -2, performance: 4, happy: -2, social: 3 } },
          { text: '"我腰不好..."', effects: { fishing: 3, performance: -1, happy: 2, social: -1 } },
          { text: '"可以叫个快递吧"', effects: { fishing: 2, performance: 0, happy: 1, social: 1 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd6_o2f',
        gender: 'female',
        text: '加班到8点，导师看你还在就走过来："差不多了就回去吧，一个女孩子太晚不安全。"虽然是好意，但你看了看旁边加班的男同事们——凭什么他们就不用被催回家。',
        choices: [
          { text: '坚持做完再走', effects: { fishing: -3, performance: 5, happy: 0, social: 1 } },
          { text: '顺水推舟收拾回家', effects: { fishing: 4, performance: -2, happy: 4, social: 0 } },
          { text: '"放心，我打车回"', effects: { fishing: 0, performance: 3, happy: 1, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // Day 7: 5/26 周二
  day7: {
    morning: [
      {
        id: 'd7_m1',
        text: '代码review日！你昨天提交的PR被标了一堆comment，导师在review里写："这里为什么这么写？""变量命名不规范""逻辑可以简化"。你数了数，23条comment。心态微崩。',
        choices: [
          { text: '虚心一条条改', effects: { fishing: -5, performance: 7, happy: -2, social: 1 } },
          { text: '先找导师当面聊', effects: { fishing: -2, performance: 5, happy: 0, social: 4 } },
          { text: '心态炸了先摸会鱼', effects: { fishing: 6, performance: -4, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd7_n1',
        text: '午饭时跟俞闲吐槽被review虐的经历。她笑着说："我第一个PR被打回了三次才过，习惯就好。导师严格是好事，说明把你当正式员工培养。"你心情好了一点。',
        choices: [
          { text: '"被你一说感觉好多了"', effects: { fishing: 1, performance: 1, happy: 4, social: 5 } },
          { text: '"三次？那我还好……"', effects: { fishing: 2, performance: 0, happy: 2, social: 3 } },
          { text: '默默决定下午好好改', effects: { fishing: -3, performance: 4, happy: 1, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd7_a1',
        text: '下午埋头改review的comment，改到第18条时你发现导师自己的代码也有同样的问题。你截了个图犹豫了一下——要不要发出来？',
        choices: [
          { text: '私聊导师委婉提一下', effects: { fishing: -1, performance: 4, happy: 2, social: 3 } },
          { text: '当没看见默默改完', effects: { fishing: 0, performance: 3, happy: 0, social: 0 } },
          { text: '截图发摸鱼群吐槽', effects: { fishing: 5, performance: -3, happy: 4, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 8: 5/27 周三
  day8: {
    morning: [
      {
        id: 'd8_m1',
        text: '早会上导师说："有个新需求分给你，不复杂，评估一下工作量。"你打开需求文档——8页。产品经理说"很简单就是加个按钮"。经验告诉你，凡是说"简单"的都不简单。',
        choices: [
          { text: '认真评估给真实时间', effects: { fishing: -3, performance: 6, happy: 0, social: 2 } },
          { text: '随口说"两天吧"', effects: { fishing: 4, performance: -3, happy: 1, social: 0 } },
          { text: '多报一倍时间留余量', effects: { fishing: 5, performance: 2, happy: 3, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd8_n1',
        text: '午休时研究新需求，越看越发现坑——涉及三个系统联动、两种边界情况没说清、还要兼容旧版本。你开始后悔早上随口给的排期。同事看你愁眉苦脸："怎么了？需求有坑？"',
        choices: [
          { text: '找同事一起分析', effects: { fishing: 0, performance: 4, happy: 2, social: 5 } },
          { text: '自己硬啃不麻烦人', effects: { fishing: -4, performance: 5, happy: -2, social: 0 } },
          { text: '先不想了午睡一会', effects: { fishing: 5, performance: -2, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd8_a1',
        text: '下午产品过来追进度："这个需求能不能提前一天？老板催了。"你内心os：昨天才接的需求今天就催？这是程序员不是魔法师啊。',
        choices: [
          { text: '"我尽量"（内心崩溃）', effects: { fishing: -4, performance: 5, happy: -3, social: 1 } },
          { text: '摆事实讲道理拒绝', effects: { fishing: -1, performance: 4, happy: 2, social: 0 } },
          { text: '"要不你帮我挡一下？"', effects: { fishing: 3, performance: 2, happy: 1, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd8_o1',
        text: '为了赶进度你决定加会班。7点的办公室，空调已经关了，暖气哄哄的。你打开代码，旁边只剩俞闲也在加班。她递过来一袋零食："撑住，写完一起走。"',
        choices: [
          { text: '效率拉满赶紧写完', effects: { fishing: -5, performance: 7, happy: 0, social: 2 } },
          { text: '边聊天边写慢慢来', effects: { fishing: 3, performance: 2, happy: 4, social: 5 } },
          { text: '算了明天再说先走了', effects: { fishing: 6, performance: -4, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // Day 9: 5/28 周四
  day9: {
    morning: [
      {
        id: 'd9_m1',
        text: '导师在日历上约了1v1。你心里有点慌——是不是摸鱼被发现了？还是代码写得太烂？走进会议室，导师笑着说："别紧张，聊聊你来两周的感受和成长计划。"',
        choices: [
          { text: '"挺好的学到很多"', effects: { fishing: 2, performance: 2, happy: 1, social: 2 } },
          { text: '诚实聊困惑和想法', effects: { fishing: -3, performance: 5, happy: 0, social: 4 } },
          { text: '"还在适应中"', effects: { fishing: 1, performance: 1, happy: 0, social: 1 } },
        ],
        triggerMiniGame: 'bubble',
      }
    ],
    noon: [
      {
        id: 'd9_n1',
        text: '1v1结束了，导师说你进步不错但要注意代码质量，还提了下半年可能有转正机会。你坐在工位消化信息——被肯定的开心和"要更努力"的压力混合在一起。',
        choices: [
          { text: '斗志满满立刻干活', effects: { fishing: -5, performance: 6, happy: 1, social: 0 } },
          { text: '先吃午饭消化心情', effects: { fishing: 3, performance: -1, happy: 3, social: 0 } },
          { text: '找你聊聊转正的事', effects: { fishing: 1, performance: 1, happy: 2, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd9_a1',
        text: '下午开始写代码，状态意外地好——导师的肯定好像给你打了鸡血。正写得起劲，旁边的产品经理凑过来："在忙？占你五分钟。"你知道产品的"五分钟"至少半小时。',
        choices: [
          { text: '戴上耳机假装没听到', effects: { fishing: 5, performance: 3, happy: 2, social: -3 } },
          { text: '"说吧什么事"', effects: { fishing: -2, performance: 3, happy: -1, social: 3 } },
          { text: '"五分钟哦我计时了"', effects: { fishing: 1, performance: 2, happy: 3, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd9_o1',
        text: '6:30了，你的代码今天差一点就能提交。是多写20分钟搞定，还是明天再说？俞闲在收拾东西准备走了，问你："要不要一起去吃个饭？"',
        choices: [
          { text: '搞定代码再走', effects: { fishing: -4, performance: 6, happy: -1, social: -2 } },
          { text: '走！明天再写', effects: { fishing: 4, performance: -2, happy: 4, social: 5 } },
          { text: '"等我十分钟！"', effects: { fishing: -1, performance: 4, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // Day 10: 5/29 周五
  day10: {
    morning: [
      {
        id: 'd10_m1',
        text: '又到周五！你的摸鱼技能经过两周修炼已经今非昔比——学会了"屏幕分割术"（左边代码右边视频）、"假装思考术"（其实在发呆）、"战略性上厕所"（一去就是20分钟）。',
        choices: [
          { text: '今天全面施展摸鱼术', effects: { fishing: 8, performance: -5, happy: 7, social: 0 } },
          { text: '周五也认真写代码', effects: { fishing: -5, performance: 7, happy: -1, social: 0 } },
          { text: '上午干活下午放飞', effects: { fishing: 4, performance: 3, happy: 4, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd10_n1',
        text: 'HR在大群发了通知：明天组织团建！可选A组"爬山健行"、B组"剧本杀"或C组"聚餐唱K"。群里炸了，大家开始站队。你选了剧本杀，俞闲选了爬山。',
        choices: [
          { text: '选爬山（和俞闲一组）', effects: { fishing: 1, performance: 1, happy: 3, social: 5 } },
          { text: '选剧本杀（和你推理）', effects: { fishing: 4, performance: 0, happy: 5, social: 4 } },
          { text: '选聚餐唱K（最轻松）', effects: { fishing: 5, performance: -1, happy: 5, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd10_a1',
        text: '周五下午3点，整层楼的摸鱼指数达到峰值。有人已经在讨论明天团建穿什么、带什么，工作群消息几乎为零。导师也在看手机，你俩对视一笑——心照不宣。',
        choices: [
          { text: '光明正大开始摸鱼', effects: { fishing: 7, performance: -4, happy: 6, social: 2 } },
          { text: '趁别人摸鱼偷偷卷', effects: { fishing: -6, performance: 8, happy: 0, social: -1 } },
          { text: '加入团建讨论群聊', effects: { fishing: 4, performance: -1, happy: 4, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 11: 5/30 周六 ★周末（团建日）
  day11: {
    morning: [
      {
        id: 'd11_m1',
        text: '团建日！虽然是周末但要早起集合，闹钟响的时候你一度怀疑人生。到了集合点发现大家都顶着黑眼圈，唯一精神的是HR——毕竟是她组织的。导师递来一杯咖啡："撑住，今天可以合法摸鱼。"',
        choices: [
          { text: '打起精神享受团建', effects: { fishing: 2, performance: 1, happy: 4, social: 5 } },
          { text: '找个角落半摸半参与', effects: { fishing: 5, performance: -1, happy: 3, social: 2 } },
          { text: '积极组织活动刷存在感', effects: { fishing: -3, performance: 4, happy: 2, social: 7 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd11_n1',
        text: '团建午餐是BBQ，大家围着烤架有说有笑。平时不怎么说话的同事都打开了话匣子，八卦从公司趣事聊到个人感情。有人起哄让你表演个才艺。',
        choices: [
          { text: '大方表演一个', effects: { fishing: 0, performance: 2, happy: 4, social: 7 } },
          { text: '害羞推辞"我不会"', effects: { fishing: 3, performance: 0, happy: 1, social: 1 } },
          { text: '转移话题cue别人', effects: { fishing: 2, performance: 1, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd11_n2m',
        gender: 'male',
        text: 'BBQ后有人组了篮球赛。你平时不怎么运动，但几个同事拉你："三缺一！"对面队leader亲自上场，感觉输了要被穿小鞋。',
        choices: [
          { text: '硬着头皮上', effects: { fishing: -1, performance: 1, happy: 3, social: 6 } },
          { text: '当计分员就好', effects: { fishing: 3, performance: 0, happy: 2, social: 3 } },
          { text: '喊"让实习生先走"', effects: { fishing: 4, performance: -1, happy: 4, social: 2 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd11_n2f',
        gender: 'female',
        text: 'BBQ后女同事们自然凑在一起聊天。话题从"哪个组加班最少"聊到"食堂哪家最好吃"再到"公司附近哪家奶茶店最赞"。你第一次觉得自己不是外人了。',
        choices: [
          { text: '积极贡献奶茶情报', effects: { fishing: 2, performance: 0, happy: 5, social: 6 } },
          { text: '默默听八卦就好', effects: { fishing: 3, performance: 0, happy: 3, social: 3 } },
          { text: '趁机打听哪个组好转正', effects: { fishing: 0, performance: 2, happy: 1, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd11_a1',
        text: '团建刚结束，导师突然在群里发了条消息："各位注意，今晚零点618开门红启动，需要on-call待命，有问题及时响应。"你看了看手机——才下午4点，今晚还得熬？',
        choices: [
          { text: '回家先补个觉再熬夜', effects: { fishing: 4, performance: 2, happy: 2, social: 0 } },
          { text: '去公司和大家一起守', effects: { fishing: -3, performance: 5, happy: 1, social: 5 } },
          { text: '"实习生也要on-call？"', effects: { fishing: 3, performance: -1, happy: 2, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 12: 5/31 周日 ★周末
  day12: {
    morning: [
      {
        id: 'd12_m1',
        text: '周日被手机震醒——工作群炸了！618开门红今天零点启动，实时战报刷屏："零点GMV破X亿！"导师发消息："注意盯着系统，有问题随时响应。"你揉着惺忪的眼打开电脑。',
        choices: [
          { text: '赶紧登录看监控', effects: { fishing: -5, performance: 7, happy: -2, social: 0 } },
          { text: '先看战报凑热闹', effects: { fishing: 3, performance: 1, happy: 4, social: 2 } },
          { text: '回"收到"继续睡', effects: { fishing: 6, performance: -4, happy: 5, social: -2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd12_n1',
        text: '开门红数据表现不错，群里一片欢腾。leader发了红包庆祝首战告捷。但有个小告警——某个接口响应变慢了，暂时没影响用户，要不要主动排查？',
        choices: [
          { text: '主动排查拿功劳', effects: { fishing: -5, performance: 8, happy: 0, social: 3 } },
          { text: '没出事先不管', effects: { fishing: 5, performance: -2, happy: 3, social: 0 } },
          { text: '报告导师让他决定', effects: { fishing: 0, performance: 3, happy: 1, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd12_a1',
        text: '下午开门红势头平稳，导师说"可以松口气了"。实习生群里有人发截图：朋友圈都在晒618战报，搞得好像自己参与了什么了不起的战役。周日就这么被开门红占据了。',
        choices: [
          { text: '发朋友圈蹭热度', effects: { fishing: 4, performance: 0, happy: 3, social: 5 } },
          { text: '关掉电脑去休息', effects: { fishing: 5, performance: -2, happy: 6, social: 0 } },
          { text: '复盘学习大促经验', effects: { fishing: -3, performance: 5, happy: 1, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [],
    evening: [
      {
        id: 'd12_e1',
        text: '19:50，开门红晚8点场即将开始！作战大屏上GMV数字不断跳动，旁边有人在喊"马上破亿了！"导师发消息："你负责的那个模块流量马上冲上来，注意告警。"',
        choices: [
          { text: '打起十二分精神盯着', effects: { fishing: -6, performance: 8, happy: -2, social: 0 } },
          { text: '看战报激动得想发朋友圈', effects: { fishing: 3, performance: 1, happy: 5, social: 4 } },
          { text: '偷偷打开购物车趁优惠下单', effects: { fishing: 7, performance: -4, happy: 6, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    midnight: [
      {
        id: 'd12_mid1',
        text: '23:50！距离5/31开门红收官还有10分钟。大屏数字在冲最后一波，整层楼灯火通明。有人开始鼓掌倒计时，有人在狂刷群消息。你的监控面板一片绿——没出问题，稳了！',
        choices: [
          { text: '加入倒计时一起嗨', effects: { fishing: 3, performance: 2, happy: 7, social: 6 } },
          { text: '默默截图留念这一刻', effects: { fishing: 2, performance: 1, happy: 5, social: 2 } },
          { text: '趁没人注意溜去休息', effects: { fishing: 6, performance: -3, happy: 4, social: -2 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },
  day13: {
    morning: [
      {
        id: 'd13_m1',
        text: '六一儿童节！一进公司就看见前台摆了一堆零食大礼包，上面贴着"祝各位大龄儿童节日快乐"。你领了一大袋零食回工位，感觉今天的工作幸福感直接拉满。',
        choices: [
          { text: '边吃零食边摸鱼', effects: { fishing: 6, performance: -3, happy: 6, social: 0 } },
          { text: '分享零食给周围人', effects: { fishing: 1, performance: 0, happy: 4, social: 6 } },
          { text: '收好零食先干活', effects: { fishing: -3, performance: 5, happy: 1, social: 0 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd13_m2',
        text: '早会上leader说："今天儿童节，大家开心就好。"然后画风一转："不过那个需求还是要按时交哈。"你在心里给leader的表情打了个差评。',
        choices: [
          { text: '苦笑着说"好的"', effects: { fishing: 2, performance: 2, happy: -1, social: 1 } },
          { text: '"今天过节能不能宽限"', effects: { fishing: 4, performance: -2, happy: 3, social: 2 } },
          { text: '默默算了算进度还行', effects: { fishing: 0, performance: 3, happy: 1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd13_n1',
        text: '午休时间有人在茶水间组队打switch——"儿童节就要回归童年！"马里奥赛车已经开了两轮，欢呼声从走廊那头传来。你的手指已经开始痒了，但下午还有个需求评审。',
        choices: [
          { text: '加入打游戏！', effects: { fishing: 7, performance: -4, happy: 7, social: 5 } },
          { text: '看别人打过过眼瘾', effects: { fishing: 4, performance: -1, happy: 3, social: 3 } },
          { text: '利用午休准备评审', effects: { fishing: -5, performance: 6, happy: -2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd13_a1',
        text: '下午需求评审开始了——产品经理在讲一个新功能，PPT做了30页。你发现有个逻辑漏洞但不确定要不要提出来，毕竟今天是儿童节大家都想早点散会。',
        choices: [
          { text: '提出来！专业第一', effects: { fishing: -4, performance: 7, happy: -1, social: 2 } },
          { text: '会后私聊产品说', effects: { fishing: -1, performance: 5, happy: 1, social: 3 } },
          { text: '算了不是我的活', effects: { fishing: 5, performance: -3, happy: 2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd13_o1',
        text: '评审完已经快6点了。产品说"那个漏洞确实要改方案，辛苦开发评估一下"。你看了看日历——六一儿童节竟然要加班？你在旁边幽幽地说："成年人的儿童节，就是假装自己不是成年人然后继续加班。"',
        choices: [
          { text: '留下来评估完再走', effects: { fishing: -4, performance: 6, happy: -2, social: 1 } },
          { text: '明天再说今天过节！', effects: { fishing: 5, performance: -3, happy: 4, social: 0 } },
          { text: '和你边聊边评估', effects: { fishing: 1, performance: 3, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // Day 14: 6/2 周二
  day14: {
    morning: [
      {
        id: 'd14_m1',
        text: '开始进入日常开发节奏了。你打开IDE，昨天的代码还停在一半，今天目标是把核心逻辑写完。刚准备进入心流状态，企业微信弹了个窗——产品约你"对齐一下需求细节"。',
        choices: [
          { text: '先写半小时再去', effects: { fishing: -1, performance: 4, happy: 1, social: 0 } },
          { text: '马上去省得一直惦记', effects: { fishing: -3, performance: 5, happy: -1, social: 2 } },
          { text: '回"下午可以吗"', effects: { fishing: 4, performance: -1, happy: 2, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd14_n1',
        text: '午饭时俞闲问你实习到现在感觉怎么样。"就……一边觉得在学东西，一边觉得自己在摸鱼，很矛盾。"她笑："正常，大家都这样。重要的是你到底想从这段实习里得到什么。"',
        choices: [
          { text: '"想留下来转正"', effects: { fishing: -2, performance: 3, happy: 1, social: 3 } },
          { text: '"想多体验少内耗"', effects: { fishing: 3, performance: 0, happy: 4, social: 3 } },
          { text: '"其实还没想清楚"', effects: { fishing: 1, performance: 1, happy: 0, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd14_a1',
        text: '下午写代码写得顺，进入了心流状态。突然发现隔壁组在开会讨论很大声，你的思路被打断了。带上降噪耳机发现没电了。你需要找个安静的地方继续。',
        choices: [
          { text: '去之前发现的宝藏角落', effects: { fishing: 4, performance: 3, happy: 3, social: 0 } },
          { text: '忍着噪音继续写', effects: { fishing: -2, performance: 4, happy: -2, social: 0 } },
          { text: '约俞闲去咖啡厅写代码', effects: { fishing: 2, performance: 2, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // Day 15: 6/3 周三 - 实习中期，开始变老油条
  day15: {
    morning: [
      {
        id: 'd15_m1',
        text: '实习快过半了，你发现自己已经掌握了这家公司的生存法则：早会说"在做了"万能回复、会议靠"这个需要再评估"拖延、午休多10分钟没人管。你开始理解什么叫"老油条的智慧"。',
        choices: [
          { text: '享受老油条的快乐', effects: { fishing: 7, performance: -3, happy: 5, social: 1 } },
          { text: '警醒自己不能太懈怠', effects: { fishing: -4, performance: 6, happy: -1, social: 0 } },
          { text: '张弛有度适度摸鱼', effects: { fishing: 3, performance: 3, happy: 4, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd15_n1',
        text: '午饭时有个正式员工说他要跳槽了，下个月就走。你有点惊讶——"不是刚来半年吗？"他笑着说："互联网没有铁饭碗，有好机会就跳呗。"俞闲在旁边默默点头。',
        choices: [
          { text: '"祝你顺利！"', effects: { fishing: 1, performance: 0, happy: 1, social: 4 } },
          { text: '问他新公司什么情况', effects: { fishing: 3, performance: -1, happy: 2, social: 3 } },
          { text: '突然开始思考自己的未来', effects: { fishing: 0, performance: 2, happy: -1, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd15_a1',
        text: '下午leader突然在群里@全员："今天下午4点临时开个会，关于下半年规划。"群里瞬间安静——临时全员会一般没好事。你看了看你，他耸耸肩："反正我要走了。"',
        choices: [
          { text: '认真准备听会内容', effects: { fishing: -3, performance: 5, happy: -1, social: 1 } },
          { text: '先打听一下什么情况', effects: { fishing: 2, performance: 1, happy: 0, social: 4 } },
          { text: '"不管了先把手头的做完"', effects: { fishing: 1, performance: 4, happy: 1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd15_o1',
        text: '会上leader宣布组织架构要调整，具体方案下周公布。散会后大家三三两两聊着猜测。你作为实习生不太确定这对自己意味着什么，但氛围明显有点微妙。俞闲拍了拍你的肩："别想太多，做好手头的事就行。"',
        choices: [
          { text: '听俞闲的安心做事', effects: { fishing: -2, performance: 4, happy: 2, social: 3 } },
          { text: '有点焦虑想多了解情况', effects: { fishing: 2, performance: 1, happy: -2, social: 3 } },
          { text: '管他呢到点下班', effects: { fishing: 5, performance: -2, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ]
  }
};

window.EVENTS_V2_PART1 = EVENTS_V2_PART1;

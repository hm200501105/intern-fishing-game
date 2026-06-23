// 实习摸鱼记 - 重构事件数据 V2（第16-30天）+ 随机事件
// 男主：余默  女主：俞闲
// 时间线：2026年5月20日-6月18日，共30天
// Day 16-30 对应 6/4-6/18，第四周进入618冲刺

const EVENTS_V2_PART2 = {

  // ===== Day 16: 6/4 周四 - 普通工作日，开始听说618 =====
  day16: {
    morning: [
      {
        id: 'd16_m1',
        text: '早上刚坐下，群里已经炸了——"618作战方案"的文档链接转了三圈。你点开一看，密密麻麻的排期表，实习生那一栏赫然写着"待定"。隐约感觉暴风雨要来了。',
        choices: [
          { text: '仔细研读方案', effects: { fishing: -3, performance: 5, happy: -1, social: 0 } },
          { text: '关掉假装没看见', effects: { fishing: 4, performance: -2, happy: 3, social: 0 } },
          { text: '问同事啥情况', effects: { fishing: 0, performance: 1, happy: 0, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd16_n1',
        text: '中午实习生约了聚餐吃火锅。锅还没开就有人提议玩真心话大冒险——话题从"你偷偷摸鱼被抓几次"聊到"你觉得谁最可能转正"。气氛热烈。',
        choices: [
          { text: '积极参与', effects: { fishing: 2, performance: -1, happy: 5, social: 6 } },
          { text: '默默吃肉当观众', effects: { fishing: 1, performance: 0, happy: 3, social: 2 } },
          { text: '主动帮大家涮菜', effects: { fishing: 0, performance: 0, happy: 4, social: 5 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd16_n2m',
        gender: 'male',
        text: '火锅局上，几个男实习生开始互相挤兑："你上次摸鱼看的什么？"有人翻出你的屏幕截图——上次看球赛的证据被保存了。大家起哄："下次请客！"',
        choices: [
          { text: '认栽请一轮奶茶', effects: { fishing: 1, performance: 0, happy: 3, social: 6 } },
          { text: '"你们谁没摸过鱼？"', effects: { fishing: 3, performance: -1, happy: 4, social: 4 } },
          { text: '假装生气实则社交', effects: { fishing: 2, performance: 0, happy: 3, social: 5 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd16_n2f',
        gender: 'female',
        text: '火锅局上不知谁起的头，话题转到了"公司里谁最帅"。有人问你怎么看，你觉得这种话题在职场聚餐里出现特别无语。隔壁那桌的男同事们在聊游戏。',
        choices: [
          { text: '敷衍一句转移话题', effects: { fishing: 1, performance: 0, happy: 1, social: 3 } },
          { text: '"我只关心谁能带我转正"', effects: { fishing: 0, performance: 2, happy: 3, social: 4 } },
          { text: '不评价，专心吃毛肚', effects: { fishing: 3, performance: 0, happy: 4, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd16_a1',
        text: '导师叫你过去，神情严肃地说："618前有几个页面需要你来搞，复杂度不高但时间紧。"随手甩过来一个需求清单，足足八项。你面不改色心在滴血。',
        choices: [
          { text: '立刻开始干活', effects: { fishing: -5, performance: 7, happy: -2, social: 0 } },
          { text: '先排优先级', effects: { fishing: -2, performance: 5, happy: 0, social: 0 } },
          { text: '问能不能砍需求', effects: { fishing: 1, performance: 2, happy: 2, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd16_o1',
        text: '六点半了，工位上灯火通明没人走。你探头看了看——果然，618效应已经开始了。导师还在开会，表情像是在渡劫。',
        choices: [
          { text: '留下多干一会', effects: { fishing: -4, performance: 5, happy: -2, social: 2 } },
          { text: '趁没人注意溜了', effects: { fishing: 5, performance: -3, happy: 4, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 17: 6/5 周五 - 有618氛围的周五 =====
  day17: {
    morning: [
      {
        id: 'd17_m1',
        text: '周五本该是快乐的，但今天的站会上导师宣布："从下周开始进入618战时状态，周末可能需要on-call。"整个会议室一片死寂，只有空调在嗡嗡作响。',
        choices: [
          { text: '主动报名值班', effects: { fishing: -5, performance: 7, happy: -3, social: 5 } },
          { text: '低头假装记笔记', effects: { fishing: 3, performance: 0, happy: 1, social: -1 } },
          { text: '偷看俞闲反应', effects: { fishing: 2, performance: -1, happy: 3, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd17_n1',
        text: '午休时间，你在工位刷手机摸鱼。突然导师从背后走过，吓得他差点把手机甩出去。还好屏幕及时切回了IDE——虽然上面的代码三小时没动过一行。',
        choices: [
          { text: '赶紧写两行代码', effects: { fishing: -3, performance: 3, happy: -1, social: 0 } },
          { text: '镇定自若装专注', effects: { fishing: 4, performance: 0, happy: 2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd17_a1',
        text: '下午三点，有人在群里喊"今天周五能不能早走"。导师秒回："今天的活今天结，做完就可以走。"你看了看自己的任务清单——还有三个没开始的需求。逃不掉了。',
        choices: [
          { text: '拼命赶工冲刺', effects: { fishing: -6, performance: 8, happy: -2, social: 0 } },
          { text: '做最紧急的那个', effects: { fishing: -2, performance: 4, happy: 0, social: 0 } },
          { text: '假装做完先跑', effects: { fishing: 6, performance: -5, happy: 5, social: -2 } },
        ],
        triggerMiniGame: 'run',
      }
    ],
    overtime: [
      {
        id: 'd17_o1',
        text: '七点了，周五的办公室依然灯火通明。你发现俞闲也还在——她正对着一份数据报表眉头紧锁。这是帮忙的好机会，还是赶紧跑路？',
        choices: [
          { text: '过去帮忙', effects: { fishing: -3, performance: 3, happy: 2, social: 7 } },
          { text: '各走各的先撤', effects: { fishing: 3, performance: 0, happy: 2, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 18: 6/6 周六 ★周末 =====
  day18: {
    morning: [
      {
        id: 'd18_m1',
        text: '周六早上十点，你还在被窝里做着不用上班的美梦。手机震了一下——导师发来消息："在吗？有个紧急问题需要排查。"美梦碎了一地。',
        choices: [
          { text: '秒回并起床', effects: { fishing: -5, performance: 6, happy: -4, social: 3 } },
          { text: '假装没看到', effects: { fishing: 6, performance: -4, happy: 3, social: -3 } },
          { text: '回复稍等一会', effects: { fishing: 2, performance: 2, happy: 0, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd18_n1',
        text: '中午了，你在家点了外卖。吃着吃着刷到实习群里的消息——有人已经去公司加班了，发了张空荡办公室的照片配文"卷王报到"。你手里的鸡腿突然不香了。',
        choices: [
          { text: '也去公司加班', effects: { fishing: -6, performance: 6, happy: -3, social: 3 } },
          { text: '安心吃完再说', effects: { fishing: 4, performance: -1, happy: 4, social: 0 } },
          { text: '在群里回个表情', effects: { fishing: 2, performance: 0, happy: 1, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd18_a1',
        text: '周六下午，阳光正好。你纠结着是出门逛逛还是在家学点东西为618做准备。窗外传来楼下孩子的笑声，电脑里是还没看完的技术文档。',
        choices: [
          { text: '出门散心', effects: { fishing: 5, performance: -2, happy: 6, social: 2 } },
          { text: '在家学习备战', effects: { fishing: -4, performance: 5, happy: -1, social: 0 } },
          { text: '打游戏放松', effects: { fishing: 6, performance: -3, happy: 5, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // ===== Day 19: 6/7 周日 ★周末 =====
  day19: {
    morning: [
      {
        id: 'd19_m1',
        text: '周日早上，难得睡到自然醒。你躺在床上刷朋友圈——同学们在旅游、聚会、打球，而自己明天又要回去面对618的修罗场。焦虑和摆烂在脑海中激烈交战。',
        choices: [
          { text: '提前预习下周任务', effects: { fishing: -5, performance: 5, happy: -2, social: 0 } },
          { text: '今天就是要躺平', effects: { fishing: 6, performance: -2, happy: 5, social: 0 } },
          { text: '约朋友出去玩', effects: { fishing: 4, performance: -1, happy: 6, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd19_n1',
        text: '中午追剧追到一半，俞闲突然发来消息："明天618备战正式开始，你那边准备得怎么样了？"配了个紧张的表情包。你看了看自己的进度——好像还差亿点点。',
        choices: [
          { text: '老实回复没准备好', effects: { fishing: 0, performance: 1, happy: -1, social: 4 } },
          { text: '逞强说没问题', effects: { fishing: 0, performance: 0, happy: 0, social: 2 } },
          { text: '约她一起复习', effects: { fishing: -3, performance: 4, happy: 3, social: 7 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd19_a1',
        text: '周日下午，最后的自由时光。你望着窗外的夕阳，心想下周开始就是地狱模式了。冰箱里还有昨天买的啤酒，电脑里还有没打完的游戏。要不要来个最后的狂欢？',
        choices: [
          { text: '尽情享受最后的自由', effects: { fishing: 7, performance: -3, happy: 7, social: 0 } },
          { text: '早睡养精蓄锐', effects: { fishing: -2, performance: 3, happy: 1, social: 0 } },
          { text: '整理下周工作清单', effects: { fishing: -4, performance: 5, happy: -1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // ===== Day 20: 6/8 周一 - 618倒计时10天，需求暴增 =====
  day20: {
    morning: [
      {
        id: 'd20_m1',
        text: '周一早上，你被拉进了三个新群："618技术保障群""618值班群""618作战室"。每个群都在疯狂跳消息，未读999+。这阵势，比高考还恐怖。',
        choices: [
          { text: '挨个群看完消息', effects: { fishing: -4, performance: 4, happy: -3, social: 3 } },
          { text: '全部设为免打扰', effects: { fishing: 5, performance: -4, happy: 3, social: -2 } },
          { text: '只看@自己的', effects: { fishing: 1, performance: 2, happy: 0, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd20_n1',
        text: '午饭时间被压缩到二十分钟。你端着盒饭回到工位，发现待办列表又多了四项新需求，每一项都标着"P0-紧急"。他怀疑产品经理是不是把键盘上的P0键按坏了。',
        choices: [
          { text: '闷头逐个击破', effects: { fishing: -6, performance: 7, happy: -3, social: 0 } },
          { text: '找导师确认优先级', effects: { fishing: -2, performance: 4, happy: 0, social: 3 } },
          { text: '偷偷delay两个', effects: { fishing: 4, performance: -3, happy: 2, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd20_a1',
        text: '下午的会议一个接一个。你在第三个会上开始神游——产品经理在讲第五版方案，设计在反复改稿，而他需要在明天前完成开发。这不是人干的活。',
        choices: [
          { text: '专注听会记要点', effects: { fishing: -3, performance: 5, happy: -2, social: 2 } },
          { text: '偷偷在下面写代码', effects: { fishing: 3, performance: 3, happy: 1, social: -1 } },
          { text: '假装网络卡退出', effects: { fishing: 6, performance: -4, happy: 4, social: -3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd20_o1',
        text: '晚上九点，618倒计时10天。整层楼灯火通明，外卖盒堆成小山。你的眼睛盯着屏幕都快冒烟了，但进度条才走了60%。旁边的正式员工淡定地说："这才哪到哪，等着吧。"',
        choices: [
          { text: '继续肝到完成', effects: { fishing: -6, performance: 8, happy: -5, social: 1 } },
          { text: '先回去明天早来', effects: { fishing: 3, performance: -1, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 21: 6/9 周二 - 高强度开发，bug频出 =====
  day21: {
    morning: [
      {
        id: 'd21_m1',
        text: '一大早就收到测试的消息：昨天提交的代码有bug，用户头像在iOS上显示成马赛克。你打开一看，原来是图片压缩参数写错了。赶紧修，赶紧修！',
        choices: [
          { text: '火速修复上线', effects: { fishing: -5, performance: 7, happy: -1, social: 0 } },
          { text: '先分析根因再修', effects: { fishing: -3, performance: 5, happy: 0, social: 0 } },
          { text: '甩锅给后端接口', effects: { fishing: 3, performance: -2, happy: 2, social: -4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd21_n1',
        text: '刚修完一个bug，又来一个：下单页面在特定条件下会白屏。更要命的是——这个代码不是你写的，但导师说"你顺手看看"。顺手？这分明是接盘。',
        choices: [
          { text: '认命接手排查', effects: { fishing: -4, performance: 6, happy: -3, social: 2 } },
          { text: '委婉推回给原作者', effects: { fishing: 2, performance: 0, happy: 1, social: -2 } },
          { text: '找俞闲一起看', effects: { fishing: -1, performance: 3, happy: 2, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd21_a1',
        text: '下午代码评审会上，你的PR被资深开发挑出了五个问题。虽然都是小事，但当着全组人的面被指出来，脸还是有点烫。俞闲投来同情的目光。',
        choices: [
          { text: '虚心接受马上改', effects: { fishing: -3, performance: 5, happy: -1, social: 3 } },
          { text: '据理力争解释', effects: { fishing: 0, performance: 2, happy: 0, social: -1 } },
          { text: '心态崩了想摸鱼', effects: { fishing: 5, performance: -3, happy: -2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd21_o1',
        text: '加班到八点半，终于把今天的bug全清了。你伸了个懒腰，发现俞闲还在旁边埋头苦干。她的屏幕上是一个复杂的数据看板——618实时监控大屏。',
        choices: [
          { text: '邀她一起吃宵夜', effects: { fishing: 2, performance: 0, happy: 4, social: 7 } },
          { text: '默默收拾走人', effects: { fishing: 2, performance: 0, happy: 1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 22: 6/10 周三 - 转正面谈/绩效讨论 =====
  day22: {
    morning: [
      {
        id: 'd22_m1',
        text: '导师一早发消息："今天下午两点来会议室聊聊。"就这一句话，没有上下文。你的心跳瞬间加速——是转正面谈？是绩效谈话？还是要被优化了？整个上午都在忐忑中度过。',
        choices: [
          { text: '紧张到什么都干不了', effects: { fishing: 4, performance: -3, happy: -4, social: 0 } },
          { text: '用工作转移注意力', effects: { fishing: -3, performance: 4, happy: -1, social: 0 } },
          { text: '找老实习生打听', effects: { fishing: 1, performance: 0, happy: 0, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd22_n1m',
        gender: 'male',
        text: '午饭时几个实习生聚在一起讨论面谈的事。有人说就是聊感受，有人说会问转正意愿。余默已经聊过了："问了三个问题，答完就让走了，别紧张。"',
        choices: [
          { text: '追问是哪三个问题', effects: { fishing: 1, performance: 2, happy: 1, social: 4 } },
          { text: '假装不在意继续吃饭', effects: { fishing: 0, performance: 0, happy: -1, social: 0 } },
          { text: '找导师提前了解情况', effects: { fishing: -2, performance: 3, happy: 1, social: 3 } },
        ],
        triggerMiniGame: null,
      },
      {
        id: 'd22_n1f',
        gender: 'female',
        text: '午饭时组里姐姐看你心不在焉，说："面谈别紧张，就是HR走流程的。上次有个实习生紧张得把水杯打翻了，你只要不打翻水杯就赢了。"你被逗笑了。',
        choices: [
          { text: '问问还有啥注意的', effects: { fishing: 1, performance: 2, happy: 2, social: 4 } },
          { text: '放松了不少', effects: { fishing: 1, performance: 0, happy: 3, social: 2 } },
          { text: '午饭都吃不下还是紧张', effects: { fishing: 2, performance: -1, happy: -2, social: 1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd22_a1',
        text: '面谈开始了。导师拿出一张评估表，上面写着各种维度的分数。他慢悠悠地说："整体还行，但618这波如果表现好的话……"后面的话被他故意留白了。标准的画饼话术！',
        choices: [
          { text: '表态会全力以赴', effects: { fishing: -4, performance: 6, happy: -1, social: 3 } },
          { text: '追问具体标准', effects: { fishing: -1, performance: 3, happy: 1, social: 2 } },
          { text: '微笑点头心里吐槽', effects: { fishing: 2, performance: 0, happy: 2, social: 1 } },
        ],
        triggerMiniGame: 'bubble',
      }
    ],
    overtime: [
      {
        id: 'd22_o1',
        text: '面谈结束，你回到工位消化了一下。画饼归画饼，但如果618真能好好表现，转正应该没问题。就是这个"好好表现"到底要多好……算了，先干活。',
        choices: [
          { text: '被激励到加班冲刺', effects: { fishing: -5, performance: 6, happy: 1, social: 0 } },
          { text: '想通了准时走', effects: { fishing: 3, performance: 0, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 23: 6/11 周四 - 618大促系统压测 =====
  day23: {
    morning: [
      {
        id: 'd23_m1',
        text: '今天是618大促系统压测日。全组人盯着监控大屏，QPS曲线像过山车一样起伏。你负责的页面突然响应超时了，红色告警闪了起来——完了！',
        choices: [
          { text: '冷静排查问题', effects: { fishing: -5, performance: 8, happy: -2, social: 0 } },
          { text: '慌张求助导师', effects: { fishing: -2, performance: 3, happy: -3, social: 3 } },
          { text: '祈祷自己恢复', effects: { fishing: 3, performance: -5, happy: -1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd23_n1',
        text: '压测暂停午休。你终于找到了超时的原因——一个循环里的数据库查询没有做缓存，在高并发下直接把连接池打满了。修复不难，但想到这个bug差点在618当天炸掉，后背一阵冷汗。',
        choices: [
          { text: '修完顺便优化全链路', effects: { fishing: -6, performance: 8, happy: 0, social: 0 } },
          { text: '只修这个点', effects: { fishing: -2, performance: 4, happy: 1, social: 0 } },
          { text: '吃个午饭再说', effects: { fishing: 3, performance: 0, happy: 3, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd23_a1',
        text: '下午继续压测，这次你的模块稳如老狗。导师在大屏前满意地点了点头，对他竖了个大拇指。虽然只是一个小动作，但你感觉整个世界都亮了。',
        choices: [
          { text: '继续监控不放松', effects: { fishing: -3, performance: 5, happy: 2, social: 0 } },
          { text: '偷偷摸会鱼', effects: { fishing: 5, performance: -1, happy: 4, social: 0 } },
          { text: '帮同事看问题', effects: { fishing: -2, performance: 3, happy: 2, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd23_o1',
        text: '压测结束总结会上，CTO宣布："整体达标，但还有几个模块需要优化。周末可能需要加一轮。"你的心情从云端跌到谷底——又是一个加班的周末预告。',
        choices: [
          { text: '主动认领优化任务', effects: { fishing: -5, performance: 7, happy: -3, social: 4 } },
          { text: '低调混过不接活', effects: { fishing: 4, performance: -1, happy: 2, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 24: 6/12 周五 - 618前最后一个周五 =====
  day24: {
    morning: [
      {
        id: 'd24_m1',
        text: '周五早上，HR在群里发了618值班排表。你往下一划——6月16号晚班、6月17号通宵班、6月18号全天。好家伙，安排得明明白白。这是实习还是服兵役？',
        choices: [
          { text: '默默接受安排', effects: { fishing: -2, performance: 3, happy: -3, social: 1 } },
          { text: '找HR问能不能换班', effects: { fishing: 1, performance: 0, happy: 0, social: 2 } },
          { text: '在群里发表情包自嘲', effects: { fishing: 2, performance: -1, happy: 3, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd24_n1',
        text: '中午一群人讨论618值班零食采购清单。有人要红牛，有人要泡面，你说要一箱咖啡。俞闲在旁边补了一句"再来点巧克力"，然后对你眨了眨眼。',
        choices: [
          { text: '帮她多点巧克力', effects: { fishing: 1, performance: 0, happy: 3, social: 6 } },
          { text: '问她要什么口味', effects: { fishing: 0, performance: 0, happy: 2, social: 5 } },
          { text: '专心吃饭不搭话', effects: { fishing: 0, performance: 0, happy: 0, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd24_a1',
        text: '下午四点，你看了眼时间。按理说周五应该能早走，但环顾四周没人有收拾的意思。有个同事已经在订晚餐了——显然今天走不了了。',
        choices: [
          { text: '认命留下继续干', effects: { fishing: -4, performance: 5, happy: -2, social: 1 } },
          { text: '做完手头的就走', effects: { fishing: 2, performance: 2, happy: 2, social: 0 } },
          { text: '和同事约个饭再加班', effects: { fishing: 0, performance: 2, happy: 2, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd24_o1',
        text: '晚上八点，你提交了最后一行代码。618前的开发任务终于全部完成了！虽然代码质量可能有点糙，但至少功能都跑通了。他长舒一口气，感觉像打完了一场仗。',
        choices: [
          { text: '自测一遍再走', effects: { fishing: -3, performance: 5, happy: 0, social: 0 } },
          { text: '直接提交跑路', effects: { fishing: 4, performance: -2, happy: 4, social: 0 } },
          { text: '叫上俞闲一起走', effects: { fishing: 1, performance: 0, happy: 3, social: 6 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 25: 6/13 周六 ★周末 - 被召回加班 =====
  day25: {
    morning: [
      {
        id: 'd25_m1',
        text: '周六早上八点，手机疯狂震动。导师在群里@所有人："压测发现新问题，相关同学今天到公司处理。"你看了看窗外的阳光，心里默念三遍"我不去我不去"——但已经点开了打车APP。',
        choices: [
          { text: '乖乖去公司', effects: { fishing: -6, performance: 7, happy: -4, social: 3 } },
          { text: '回复不是我的模块', effects: { fishing: 4, performance: -2, happy: 2, social: -3 } },
          { text: '磨蹭到中午再去', effects: { fishing: 2, performance: 1, happy: 0, social: -1 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd25_n1',
        text: '周六的公司格外安静，只有618相关的几组人在。你发现公司贴心地准备了免费午餐——虽然只是盒饭，但有种"卖命换盒饭"的荒诞感。俞闲也来了，坐在对面默默吃饭。',
        choices: [
          { text: '吐槽周末加班', effects: { fishing: 2, performance: 0, happy: 2, social: 4 } },
          { text: '讨论618技术方案', effects: { fishing: -2, performance: 4, happy: 0, social: 3 } },
          { text: '安静吃饭各干各的', effects: { fishing: 0, performance: 1, happy: 0, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd25_a1',
        text: '下午三点，问题终于解决了。导师说可以先走，但明天可能还要来。你看着空荡的办公室，有种说不出的疲惫——这还没到618呢，已经这么卷了。',
        choices: [
          { text: '回去好好休息', effects: { fishing: 5, performance: -1, happy: 4, social: 0 } },
          { text: '顺便多做点预案', effects: { fishing: -4, performance: 5, happy: -2, social: 0 } },
          { text: '约俞闲出去逛逛', effects: { fishing: 3, performance: -1, happy: 5, social: 7 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // ===== Day 26: 6/14 周日 ★周末 - 618倒计时4天 =====
  day26: {
    morning: [
      {
        id: 'd26_m1',
        text: '周日早上，你在半梦半醒间摸到手机——好消息，导师没发消息；坏消息，群里有人说下午要再对一遍上线checklist。618倒计时4天，空气里都是紧张的味道。',
        choices: [
          { text: '上午先休息下午再说', effects: { fishing: 4, performance: 0, happy: 3, social: 0 } },
          { text: '提前对好自己的部分', effects: { fishing: -3, performance: 4, happy: -1, social: 0 } },
          { text: '假装没看到消息', effects: { fishing: 5, performance: -3, happy: 2, social: -2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd26_n1',
        text: '中午在家吃了碗泡面，俞闲发来消息："下午的checklist会议你参加吗？"附带一个猫猫叹气的表情包。看来她也不想去，但又不得不去。同是天涯加班人啊。',
        choices: [
          { text: '回复一起线上参加', effects: { fishing: -1, performance: 2, happy: 1, social: 5 } },
          { text: '说自己的部分已经OK', effects: { fishing: 2, performance: 1, happy: 1, social: 2 } },
          { text: '提议明天到公司再说', effects: { fishing: 3, performance: -1, happy: 2, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd26_a1',
        text: '下午checklist会议远程进行。你负责的三个功能点全部通过，导师难得表扬了一句"不错"。会后你关上电脑，告诉自己：这是618前最后的休息了，好好珍惜。',
        choices: [
          { text: '出门放风解压', effects: { fishing: 5, performance: -1, happy: 6, social: 2 } },
          { text: '在家看电影放松', effects: { fishing: 4, performance: 0, happy: 4, social: 0 } },
          { text: '再检查一遍代码', effects: { fishing: -4, performance: 4, happy: -1, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: []
  },

  // ===== Day 27: 6/15 周一 - 618预热正式开始 =====
  day27: {
    morning: [
      {
        id: 'd27_m1',
        text: '周一早上八点，你破天荒地提前半小时到公司。大屏幕上已经挂出了"618作战指挥中心"的实时数据看板，红色倒计时显示"距618还有3天"。全员进入战时状态，连厕所都贴上了鼓劲标语。',
        choices: [
          { text: '热血沸腾全力备战', effects: { fishing: -6, performance: 8, happy: 1, social: 2 } },
          { text: '内心毫无波动', effects: { fishing: 2, performance: 0, happy: 0, social: 0 } },
          { text: '拍照发朋友圈', effects: { fishing: 3, performance: -1, happy: 3, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd27_n1',
        text: '午饭取消堂食改发盒饭，所有人在工位边吃边干。你啃着鸡腿盯着监控面板——618预热活动零点刚上线，流量比预期高了30%，系统有点吃紧。',
        choices: [
          { text: '放下鸡腿开始优化', effects: { fishing: -5, performance: 7, happy: -2, social: 0 } },
          { text: '先吃完再说', effects: { fishing: 2, performance: 0, happy: 2, social: 0 } },
          { text: '汇报情况给导师', effects: { fishing: -1, performance: 3, happy: 0, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd27_a1',
        text: '下午两点，突然一阵骚动——有个促销页面挂了！PM在群里@所有前端："页面白屏了谁来看一下！！！"三个感叹号直接把你的血压拉满。虽然不是他负责的页面，但……',
        choices: [
          { text: '主动帮忙排查', effects: { fishing: -5, performance: 7, happy: -1, social: 6 } },
          { text: '确认不是自己的再说', effects: { fishing: 1, performance: 1, happy: 1, social: 0 } },
          { text: '趁乱摸一会鱼', effects: { fishing: 5, performance: -3, happy: 3, social: -2 } },
        ],
        triggerMiniGame: 'run',
      }
    ],
    overtime: [
      {
        id: 'd27_o1',
        text: '晚上十点，值班排班正式生效。你今晚不用值班，但看着留守的同事们一个个红着眼睛盯屏幕，有种奇怪的内疚感。俞闲发消息："你先回去，明天你的班。"',
        choices: [
          { text: '留下来陪值班', effects: { fishing: -5, performance: 4, happy: -2, social: 6 } },
          { text: '听劝先回去休息', effects: { fishing: 3, performance: 1, happy: 2, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 28: 6/16 周二 - 618倒计时，紧急bug修复 =====
  day28: {
    morning: [
      {
        id: 'd28_m1',
        text: '早上刚到工位就看到钉钉消息99+。昨晚值班的同事留了一堆问题——两个P0 bug、一个数据异常、还有一个"偶发白屏待观察"。你的晨间好心情瞬间蒸发。',
        choices: [
          { text: '先处理P0 bug', effects: { fishing: -6, performance: 8, happy: -3, social: 0 } },
          { text: '喝杯咖啡定定神', effects: { fishing: 1, performance: 1, happy: 1, social: 0 } },
          { text: '拉群讨论分工', effects: { fishing: -2, performance: 4, happy: 0, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd28_n1',
        text: 'P0 bug修到一半，发现是个跨模块的问题——需要后端配合改接口。但后端同事正在处理另一个更紧急的线上问题。你发消息催了三遍，对面已读不回。618的混乱真实上演。',
        choices: [
          { text: '直接走过去面对面沟通', effects: { fishing: -3, performance: 5, happy: -1, social: 3 } },
          { text: '先绕过去用临时方案', effects: { fishing: 0, performance: 3, happy: 0, social: 0 } },
          { text: '在群里升级给导师', effects: { fishing: -1, performance: 2, happy: -1, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd28_a1',
        text: '下午四点，所有P0问题终于清零。618倒计时大屏上数字跳到了"2天"。导师拍了拍你的肩："今晚你值班到12点，能顶住吗？"',
        choices: [
          { text: '拍胸脯保证没问题', effects: { fishing: -4, performance: 6, happy: -1, social: 4 } },
          { text: '老实说有点虚', effects: { fishing: 0, performance: 2, happy: 0, social: 3 } },
          { text: '问能不能找人搭班', effects: { fishing: 1, performance: 1, happy: 1, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [
      {
        id: 'd28_o1',
        text: '晚上值班开始了。你和另一个实习生盯着监控面板，每隔十分钟刷新一次数据。一切平稳。俞闲发来消息："还顺利吗？我给你带了咖啡放前台了。"',
        choices: [
          { text: '去拿咖啡顺便回个谢', effects: { fishing: 1, performance: 0, happy: 5, social: 6 } },
          { text: '回复没事让她早点睡', effects: { fishing: 0, performance: 1, happy: 2, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 29: 6/17 周三 - 618前夜，通宵值班 =====
  day29: {
    morning: [
      {
        id: 'd29_m1',
        text: '618前一天。整个办公室弥漫着一种"暴风雨前的平静"——所有代码冻结，不允许任何上线操作。你反而闲下来了，但精神上却绷得很紧，像等待发令枪响的运动员。',
        choices: [
          { text: '反复检查自己的代码', effects: { fishing: -3, performance: 4, happy: -1, social: 0 } },
          { text: '趁机补觉攒体力', effects: { fishing: 5, performance: -1, happy: 3, social: 0 } },
          { text: '和团队对齐应急方案', effects: { fishing: -2, performance: 3, happy: 0, social: 4 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd29_n1',
        text: '中午公司请全员吃了大餐——据说是"618誓师宴"。满桌子菜还有水果饮料，气氛既热闹又紧张。大领导上台讲话："今晚通宵值班，明天就是决战！"掌声响起，你默默鼓掌，心想怎么感觉像进了传销大会。',
        choices: [
          { text: '认真听讲群情激昂', effects: { fishing: -2, performance: 3, happy: 1, social: 3 } },
          { text: '埋头猛吃免费大餐', effects: { fishing: 3, performance: 0, happy: 5, social: 1 } },
          { text: '和俞闲偷偷吐槽', effects: { fishing: 2, performance: -1, happy: 4, social: 5 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd29_a1',
        text: '下午的时间过得异常缓慢。所有人都在等——等零点的钟声敲响，等618正式开始。导师让大家轮流去休息室眯一会儿，"晚上有硬仗要打"。你的脑子里不断回响着各种"万一出问题怎么办"。',
        choices: [
          { text: '去休息室躺一会', effects: { fishing: 3, performance: 1, happy: 2, social: 0 } },
          { text: '太紧张睡不着', effects: { fishing: 0, performance: 0, happy: -2, social: 0 } },
          { text: '和同事聊天解压', effects: { fishing: 1, performance: 0, happy: 2, social: 4 } },
        ],
        triggerMiniGame: 'decode',
      }
    ],
    overtime: [
      {
        id: 'd29_o1',
        text: '晚上十一点，全员就位。办公室灯火通明如白昼，大屏幕上倒计时"距618还有1小时"。红牛见底了，键盘声此起彼伏。你深吸一口气——决战时刻要来了。',
        choices: [
          { text: '全神贯注进入状态', effects: { fishing: -6, performance: 8, happy: 0, social: 2 } },
          { text: '偷偷紧张发个朋友圈', effects: { fishing: 2, performance: 0, happy: 2, social: 3 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },

  // ===== Day 30: 6/18 周四 - 618当天 + 实习最后一天 =====
  day30: {
    morning: [
      {
        id: 'd30_m1',
        text: '凌晨零点，618大促正式开始！瞬间流量暴涨，监控曲线像火箭一样窜升。大屏上实时滚动着成交金额——10亿、20亿、50亿……整个办公室爆发出欢呼声。你的页面承受住了峰值，心里那块石头终于落地了。',
        choices: [
          { text: '继续紧盯不敢松懈', effects: { fishing: -5, performance: 8, happy: 2, social: 2 } },
          { text: '激动地和大家击掌', effects: { fishing: 0, performance: 2, happy: 6, social: 6 } },
          { text: '偷偷松口气想补觉', effects: { fishing: 3, performance: 0, happy: 2, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    noon: [
      {
        id: 'd30_n1',
        text: '中午，618战报出炉——销售额破纪录！领导在群里连发三个"好"字，PM激动得语音消息都在颤抖。庆祝的气氛弥漫在每个角落。你和俞闲对视一笑——他们这些实习生也是这场大战的一份子。',
        choices: [
          { text: '由衷为团队开心', effects: { fishing: 0, performance: 3, happy: 7, social: 5 } },
          { text: '心里想着加班费', effects: { fishing: 2, performance: 0, happy: 3, social: 0 } },
          { text: '感叹终于结束了', effects: { fishing: 1, performance: 0, happy: 4, social: 2 } },
        ],
        triggerMiniGame: null,
      }
    ],
    afternoon: [
      {
        id: 'd30_a1',
        text: '下午，618高峰已过，系统趋于平稳。你突然想起——今天也是实习的最后一天。他看着自己的工位：贴满便利贴的显示器、喝了一半的咖啡、和俞闲一起买的桌面摆件。三十天就这样过去了。',
        choices: [
          { text: '认真写实习总结', effects: { fishing: -3, performance: 6, happy: 2, social: 3 } },
          { text: '找每个人道别', effects: { fishing: 0, performance: 1, happy: 4, social: 8 } },
          { text: '最后摸一次鱼纪念', effects: { fishing: 7, performance: -2, happy: 5, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    overtime: [],
    evening: [
      {
        id: 'd30_e1',
        text: '19:50，618晚8点大促高潮来了！第二波流量比零点更猛，大屏数字疯狂跳动。导师紧盯监控："撑住撑住，最后一波了！"整层楼的紧张感几乎凝成固体。这是你实习的最后一个晚高峰了。',
        choices: [
          { text: '全力以赴站好最后一班岗', effects: { fishing: -6, performance: 9, happy: 3, social: 3 } },
          { text: '激动地录视频记录现场', effects: { fishing: 3, performance: 1, happy: 6, social: 4 } },
          { text: '悄悄下单抢最后的优惠', effects: { fishing: 6, performance: -3, happy: 5, social: 0 } },
        ],
        triggerMiniGame: null,
      }
    ],
    midnight: [
      {
        id: 'd30_mid1',
        text: '23:50，618收官倒计时！大屏最终定格在一个天文数字上，全场起立鼓掌！导师组织了庆功——几瓶啤酒、一些零食、还有一张写满签名的贺卡。"谢谢你这30天的付出。"俞闲举起杯子朝你笑。实习的最后10分钟，所有加班和摸鱼都变成了值得的回忆。',
        choices: [
          { text: '留下来庆祝到最后', effects: { fishing: 2, performance: 2, happy: 8, social: 9 } },
          { text: '喝完这杯默默离开', effects: { fishing: 0, performance: 0, happy: 5, social: 3 } },
          { text: '鼓起勇气问俞闲联系方式', effects: { fishing: 0, performance: 0, happy: 7, social: 10 } },
        ],
        triggerMiniGame: null,
      }
    ]
  },
};

// ===== 随机事件池（15个，适用于任意时段）=====
const RANDOM_EVENTS_V2 = [
  {
    id: 'r1',
    text: '老板突然转身，目光直直地扫向你的屏幕。你的浏览器上还开着淘宝页面——虽然你辩称是"竞品调研"，但那个购物车图标出卖了你。',
    choices: [
      { text: '光速切换窗口', effects: { fishing: -3, performance: 1, happy: -3, social: 0 } },
      { text: '淡定说在看竞品', effects: { fishing: 2, performance: -1, happy: 1, social: 0 } },
      { text: '反问老板要不要拼单', effects: { fishing: 3, performance: -3, happy: 5, social: 2 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r2',
    text: '全员大会临时通知！五分钟后在大会议室集合。你连忙关掉正在看的小说网页，抓起笔记本冲过去——结果发现是HR讲企业文化。',
    choices: [
      { text: '认真听做笔记', effects: { fishing: -2, performance: 2, happy: -2, social: 2 } },
      { text: '在下面偷偷玩手机', effects: { fishing: 5, performance: -2, happy: 3, social: -1 } },
      { text: '找个角落打瞌睡', effects: { fishing: 4, performance: -1, happy: 2, social: -1 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r3',
    text: 'HR突击检查工位！说是"5S评比"，实际就是看谁桌上零食最多。你低头一看——三包辣条、两罐可乐、一袋瓜子，简直是零食铺。',
    choices: [
      { text: '火速塞进抽屉', effects: { fishing: 1, performance: 1, happy: 0, social: 0 } },
      { text: '大方分享给同事', effects: { fishing: 2, performance: 0, happy: 2, social: 5 } },
      { text: '假装是客户送的样品', effects: { fishing: 2, performance: -1, happy: 3, social: 1 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r4',
    text: '隔壁帮你掩护摸鱼的小刘今天请假了！没有了"有人来了"的预警系统，你今天得靠自己的第六感活下去了。失去战友的日子格外艰难。',
    choices: [
      { text: '今天老实干活', effects: { fishing: -4, performance: 4, happy: -1, social: 0 } },
      { text: '在显示器贴后视镜', effects: { fishing: 4, performance: -1, happy: 3, social: 0 } },
      { text: '找新的掩护盟友', effects: { fishing: 2, performance: 0, happy: 1, social: 3 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r5',
    text: '快递到了！驿站发来取件通知。你的心情瞬间从打工人变成了拆箱博主。但现在是工作时间，出去拿要十五分钟——得找个借口。',
    choices: [
      { text: '说去接杯水（绕道拿快递）', effects: { fishing: 4, performance: -2, happy: 4, social: 0 } },
      { text: '忍到午休再去', effects: { fishing: -2, performance: 2, happy: -1, social: 0 } },
      { text: '让同事帮忙带', effects: { fishing: 1, performance: 0, happy: 2, social: 3 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r6',
    text: '外卖洒了！打开袋子的瞬间，酸辣粉的汤汁不受控制地洒了一桌。键盘、鼠标垫、文件——无一幸免。空气中弥漫着一股醋味，隔壁同事投来同情的目光。',
    choices: [
      { text: '立刻抢救键盘', effects: { fishing: -2, performance: 1, happy: -3, social: 0 } },
      { text: '先自拍发朋友圈', effects: { fishing: 3, performance: -2, happy: 2, social: 3 } },
      { text: '向IT借备用键盘', effects: { fishing: 0, performance: 0, happy: -1, social: 2 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r7',
    text: '大佬在工作群里@了你："你，你做的那个功能……"消息没打完就撤回了。你盯着"对方撤回了一条消息"，心跳都要停了——是好事还是坏事？！',
    choices: [
      { text: '主动私聊问情况', effects: { fishing: -2, performance: 2, happy: -2, social: 3 } },
      { text: '假装没看到', effects: { fishing: 2, performance: 0, happy: -1, social: -1 } },
      { text: '紧张地自查代码', effects: { fishing: -3, performance: 3, happy: -3, social: 0 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r8',
    text: '等电梯时，门开了——CEO走了出来。四目相对的瞬间，你的脑子一片空白。大佬微微点了下头就走了，留下你在原地回味：他是不是对我笑了？',
    choices: [
      { text: '镇定微笑打招呼', effects: { fishing: 0, performance: 2, happy: 1, social: 4 } },
      { text: '低头假装看手机', effects: { fishing: 1, performance: 0, happy: -1, social: -1 } },
      { text: '事后和同事炫耀', effects: { fishing: 2, performance: -1, happy: 3, social: 3 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r9',
    text: '工位网络突然断了！WiFi图标打了个叉，代码推不上去，网页打不开。你试了重启、换网线、重连VPN——都没用。这是上天赐予的合法摸鱼时间？',
    choices: [
      { text: '报修然后正当摸鱼', effects: { fishing: 6, performance: -1, happy: 5, social: 0 } },
      { text: '用手机热点继续干活', effects: { fishing: -4, performance: 5, happy: -2, social: 0 } },
      { text: '去其他工位蹭网', effects: { fishing: 1, performance: 2, happy: 0, social: 2 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r10',
    text: '上厕所遇到排队，前面是隔壁组的老王。老王笑眯眯搭话："小余啊最近忙不忙？我们组有个活想借你用用。"这是陷阱还是机会？',
    choices: [
      { text: '热情表示可以帮忙', effects: { fishing: -2, performance: 3, happy: 0, social: 5 } },
      { text: '委婉说要问导师', effects: { fishing: 1, performance: 1, happy: 0, social: 2 } },
      { text: '假装肚子疼先溜了', effects: { fishing: 3, performance: 0, happy: 2, social: -2 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r11',
    text: '茶水间角落发现一个隐藏零食柜！里面塞满了薯片、巧克力和各种小饼干，贴着"自取"的便利贴。你眼睛放光——这难道就是传说中的"员工福利暗柜"？',
    choices: [
      { text: '拿两包就走', effects: { fishing: 2, performance: 0, happy: 4, social: 0 } },
      { text: '带一把回去分给同事', effects: { fishing: 3, performance: -1, happy: 3, social: 5 } },
      { text: '记住位置以后常来', effects: { fishing: 1, performance: 0, happy: 3, social: 0 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r12',
    text: '有人在群里发起下午茶团购！"凑够十人打八折，谁来？"你看了眼——奶茶加小蛋糕才15块。关键是取奶茶可以合法离开工位十分钟。',
    choices: [
      { text: '积极参加并帮拿', effects: { fishing: 3, performance: -1, happy: 4, social: 5 } },
      { text: '参加但不帮拿', effects: { fishing: 1, performance: 0, happy: 3, social: 2 } },
      { text: '忍住减肥不参加', effects: { fishing: -1, performance: 1, happy: -1, social: -1 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r13',
    text: '一个新来的实习生怯生生地走过来："学长，请问会议室怎么走？"你一时恍惚——原来自己已经是"老人"了。带路的过程中多摸了五分钟鱼，感觉不错。',
    choices: [
      { text: '热心带路顺便闲逛', effects: { fishing: 4, performance: -1, happy: 3, social: 5 } },
      { text: '指个方向让他自己找', effects: { fishing: 1, performance: 0, happy: 0, social: -1 } },
      { text: '带路并传授摸鱼秘籍', effects: { fishing: 5, performance: -2, happy: 5, social: 6 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r14',
    text: '同事小李凑过来小声说："帮我掩护一下，我出去取个快递。如果导师问就说我去厕所了。"他眼神里满是信任。互助摸鱼，这就是同事间最珍贵的革命友谊。',
    choices: [
      { text: '仗义帮忙掩护', effects: { fishing: 3, performance: -1, happy: 2, social: 6 } },
      { text: '让他快去快回', effects: { fishing: 1, performance: 0, happy: 1, social: 3 } },
      { text: '要求他下次也帮我', effects: { fishing: 2, performance: 0, happy: 2, social: 4 } },
    ],
    probability: 0.15,
  },
  {
    id: 'r15',
    text: '一封全员邮件炸了群——据说某个高管要离职！整层楼都在窃窃私语，茶水间挤满了八卦的人。生产力瞬间归零，全员进入吃瓜模式。',
    choices: [
      { text: '加入吃瓜大军', effects: { fishing: 5, performance: -3, happy: 4, social: 5 } },
      { text: '装作不感兴趣', effects: { fishing: -1, performance: 2, happy: -1, social: -2 } },
      { text: '默默刷内网找线索', effects: { fishing: 3, performance: -1, happy: 3, social: 1 } },
    ],
    probability: 0.15,
  },
];

window.EVENTS_V2_PART2 = EVENTS_V2_PART2;
window.RANDOM_EVENTS_V2 = RANDOM_EVENTS_V2;

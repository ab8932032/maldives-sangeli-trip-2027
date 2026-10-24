'use strict';
const $=s=>document.querySelector(s);
const days=[
 {
  "date": "05.01",
  "short": "上岛，四人会合",
  "title": "先干杯，再一起认识这座岛。",
  "tag": "ACT 01 · HELLO, MAADHOO",
  "group": "四人会合日",
  "image": "paper-island.svg",
  "alt": "四位纸片旅伴在马代椰岛与水屋旁会合的想象场景",
  "bubble": "北京组 × 成都组<br>终于，在同一片海见面。",
  "prop": "✈",
  "place": "MLE → Maadhoo · 抵岛日",
  "intro": "以下五天以OZEN LIFE MAADHOO为示范主案，尚未锁岛或订房。先住稳，再一次约好四个人的餐厅和出海。",
  "slots": [
   [
    "抵岛后",
    "机场会合，按船班上岛",
    "两队航班交给酒店统筹；快艇航程约45分钟，另有候船和入境时间。房型同时比较一套双卧泳池沙屋与两间泳池水屋。"
   ],
   [
    "下午",
    "领装备，熟悉岛上路线",
    "找到主餐厅、水上中心和集合点，试面镜、了解当天海况。房位申请远离儿童设施，是否能安排由酒店确认。"
   ],
   [
    "日落前",
    "四个人的第一杯",
    "在Joie de Vivre找位置看海，点套餐指定饮品或无酒精特调。晚到就直接吃饭，不追赶日落。"
   ],
   [
    "晚餐",
    "The Palms，轻松吃第一餐",
    "四人同桌，不安排到点必须出现的出海。入住时约好特色餐、浮潜、海钓、SPA；餐位和同组均需确认。"
   ]
  ],
  "food": "抵岛后按订单约定开始餐标。The Palms晚餐，酒吧指定酒水或无酒精选项；每日迷你吧补充范围入住时核对。",
  "tip": "5月1日能否赶上下午项目取决于两地实际航班。今天只安排可取消的轻松内容。"
 },
 {
  "date": "05.02",
  "short": "四人浮潜，换家餐厅",
  "title": "上午看鱼，晚上换一种味道。",
  "tag": "ACT 02 · UNDER THE BLUE",
  "group": "四人浮潜 + 聚餐",
  "image": "reef-day.svg",
  "alt": "四位穿救生衣的纸片旅伴在鱼与珊瑚间浮潜的想象场景",
  "bubble": "今天的共同话题：<br>刚刚那条鱼，你看见了吗？",
  "prop": "≈",
  "place": "向导浮潜 → The Palms → TRADITION PEKING",
  "intro": "把第一次出海放在第一个完整岛日，给天气改期留下空间；晚餐换一家点餐餐厅。",
  "slots": [
   [
    "早餐后",
    "听简报，参加浮潜出海",
    "现行INDULGENCE Plan有浮潜接驳与装备。按潜店确认的班次、海况与能力评估下水，四人申请同组。"
   ],
   [
    "午间",
    "The Palms午餐 + 午休",
    "先补充水分，吃好再回房避开正午强晒。别把每天都塞满项目。"
   ],
   [
    "下午",
    "共享泳池时间，或者沙滩散步",
    "住双卧就一起用客厅、私池和露台；住两间水屋就约好集合。选择适合四个人的节奏。"
   ],
   [
    "晚餐",
    "TRADITION PEKING四人聚餐",
    "预约中式与远东风味晚餐，具体菜单、营业与可用餐次听酒店确认；饭后再到酒吧聊一会儿。"
   ]
  ],
  "food": "The Palms早餐、午餐；晚餐优先预约TRADITION PEKING。指定酒单、迷你吧与餐厅范围按四成人订单确认，特色食材升级不默认免费。",
  "tip": "不保证看到海龟、海豚或某种鱼。插画只表达旅行情境；风浪不合适就改岛上活动。"
 },
 {
  "date": "05.03",
  "short": "皮划艇，日落海钓",
  "title": "四个人，一条船，一场日落。",
  "tag": "ACT 03 · THE FOUR-PERSON CREW",
  "group": "四人一起玩海",
  "image": "boat-day.svg",
  "alt": "四位纸片旅伴坐多尼船在落日下海钓的想象场景",
  "bubble": "今天不比谁钓得多。<br>比谁先放下手机。",
  "prop": "☀",
  "place": "皮划艇 / SUP → 日落海钓",
  "intro": "早餐后轻松玩水，下午休息，傍晚把海钓作为主角。出海后不赶预约制特色晚餐。",
  "slots": [
   [
    "上午",
    "双人皮划艇或SUP",
    "现行方案有指定非机动水上项目。四人轮流体验和拍照；器材、时长和许可范围先问水上中心。"
   ],
   [
    "午间",
    "午餐、休息，再去集合",
    "午后留白。提前确认海钓集合时间、船上饮水及是否可四人同船。"
   ],
   [
    "傍晚",
    "四人日落海钓",
    "现行方案列每人每次入住一次日落海钓，2027订单需确认。轻量体验，不保证渔获；料理渔获是否另付费先问。"
   ],
   [
    "回岛后",
    "The Palms晚餐，酒吧继续聊天",
    "按返航和营业时间吃饭。想认真钓大鱼可另询私人包船，用它替换轻量海钓，费用另列。"
   ]
  ],
  "food": "早餐、午餐和返航后晚餐以The Palms为主，避免海钓与特色餐厅预约撞时间。酒吧按指定菜单点酒、咖啡或无酒精饮品。",
  "tip": "套餐Sunset Fishing不等于Big Game Fishing。大物海钓、拖伞、摩托艇等均按具体订单另核，不能把全包理解成所有项目免费。"
 },
 {
  "date": "05.04",
  "short": "SPA、海底餐，四人收官",
  "title": "最后一个完整岛日，吃一顿特别的。",
  "tag": "ACT 04 · A TABLE BENEATH THE SEA",
  "group": "四人放松 + 特色晚餐",
  "image": "crew-day.svg",
  "alt": "四位纸片旅伴乘船看海的想象场景，不代表当天保证参加额外巡航",
  "bubble": "四个人，一桌好饭。<br>把最后一个岛日慢慢过。",
  "prop": "✳",
  "place": "SPA / 补浮潜 → M6m海底餐厅",
  "intro": "优先用这天补前两天受天气影响的项目。若都顺利，就慢慢游泳、做SPA，晚餐留给海底餐厅。",
  "slots": [
   [
    "上午",
    "SPA或泳池，按四人的预约安排",
    "现行四晚方案含每成人一次60分钟SPA或符合条件的持证潜水，二选一；潜水资格、器材费和预约名额须确认。可申请同一时段，不能保证四人同时做。"
   ],
   [
    "午间",
    "午餐 + 给天气留白",
    "前两天浮潜或海钓取消时先补项目；否则回房休息。日落巡航可按酒店班次另一天安排，避免与今晚晚餐冲突。"
   ],
   [
    "晚餐",
    "M6m海底餐厅四人同桌",
    "现行四晚方案可安排一次M6m体验，须提前订位；不是每天免费去。菜单、饮品和年龄限制以2027确认为准。"
   ],
   [
    "饭后",
    "最后一张合照，一起喝一杯",
    "去四个人喜欢的位置补一张合照，整理相册。保持四人一起的主线，不拆成两对各自约会。"
   ]
  ],
  "food": "The Palms早餐、午餐；晚餐优先M6m。若未订到餐位，提前与酒店调换日期，不把名额当已锁定。也可另一天预约TRADITION INDOCEYLON换口味。",
  "tip": "SPA、M6m、LONU等权益与最低晚数有关，全包不等于无限次数。自费加项目先核预算，少排一项也给四人留下休息空间。"
 },
 {
  "date": "05.05",
  "short": "早餐、告别，各自回家",
  "title": "把海装进口袋，慢慢说再见。",
  "tag": "ACT 05 · SEE YOU, MALDIVES",
  "group": "四人收尾 + 各自返程",
  "image": "paper-island.svg",
  "alt": "四位旅伴告别马代椰岛的纸片场景",
  "bubble": "五天的故事结束。<br>四个人的相册，刚刚开始。",
  "prop": "↗",
  "place": "Maadhoo → MLE → 北京 / 成都",
  "intro": "5月1日入住、5月5日离岛，共四晚。最后一天只留早餐、收行李和机场衔接。",
  "slots": [
   [
    "早餐后",
    "最后一眼海，备份四人的照片",
    "若船班很早，按酒店通知提前起床。把早餐、行李与集合时间排在第一位。"
   ],
   [
    "退房前",
    "核对房账和四成人权益",
    "归还装备，核对自费酒水、特色菜和出海账单；退房时间、餐标何时结束，以订单及酒店书面确认为准。"
   ],
   [
    "按船班",
    "快艇返机场",
    "航程不是完整转运时间，船班由酒店配合各自国际航班安排。若离岛较晚，先问午餐、酒水和延迟退房费用。"
   ],
   [
    "返程",
    "北京组、成都组各自回家",
    "建议先给5月6日留回国余量。若5月5日必须到家，需先找到两组都能衔接的实际航班。"
   ]
  ],
  "food": "早餐收尾。五天四晚不代表五个完整自然日无限吃喝；到离店日的权益起止要写入订单，不默认含离岛前所有餐饮。",
  "tip": "2027航班与入境政策须在预订及出发前确认。日程钟点都是建议，酒店班次与海况优先。"
 }
];
const sources=[
 [
  "Maadhoo · INDULGENCE Plan官方文件",
  "https://toc-ucmsapi.theozencollection.com/TOC/images/pdflink5a6cf8cf-2519-4936-9987-ac4f1da87768file.pdf.pdf"
 ],
 [
  "Maadhoo · 双卧泳池沙屋与四成人容量",
  "https://theozencollection.com/maadhoo/en/our-villas/earth-pool-pavilion"
 ],
 [
  "奥臻瑞泽 · 双卧滑梯水屋",
  "https://theozencollection.com/bolifushi/en/our-villas/ocean-pool-reserve-sunset-with-slide"
 ],
 [
  "奥臻瑞泽 · RESERVE Plan",
  "https://theozencollection.com/bolifushi/en/reserve-plan"
 ],
 [
  "丽思卡尔顿 · 双卧别墅",
  "https://www.ritzcarlton.com/en/hotels/mlera-the-ritz-carlton-maldives-fari-islands/rooms/signature-villas/"
 ],
 [
  "丽思卡尔顿 · 官网含餐与接送套餐",
  "https://www.marriott.com/offers/stay-longer-save-more-OFF-227801/MLERA-mlera-the-ritz-carlton-maldives-fari-islands"
 ],
 [
  "华尔道夫 · 水屋与四成人双卧",
  "https://www.waldorfastoriamaldives.com/over-the-water/"
 ],
 [
  "华尔道夫 · 官网套餐与适用日期",
  "https://www.waldorfastoriamaldives.com/packages/"
 ],
 [
  "Lobigili · Lobi全包计划",
  "https://coloursofoblu.com/oblu-select-lobigili/en/lobi-plan"
 ],
 [
  "You & Me · 年龄、交通与FAQ",
  "https://www.youandmemaldives.com/frequently-asked-questions"
 ],
 [
  "Hurawalhi · 年龄与接送",
  "https://www.hurawalhi.com/cn/getting-here/"
 ],
 [
  "莉莉 · Platinum全包",
  "https://www.lilybeachmaldives.com/platinum-plan/"
 ],
 [
  "Maldivian · 官方目的地",
  "https://maldivian.aero/destinations/"
 ],
 [
  "Maldivian · 中国航线历史公告",
  "https://maldivian.aero/media/2025/09/04/maldivian-unveils-promotional-fares-to-china.html"
 ],
 [
  "马代气象局 · 气候与季风",
  "https://www.meteorology.gov.mv/climate"
 ],
 [
  "中国外交部 · 中马互免签证公告",
  "https://www.fmprc.gov.cn/wjbzwfwpt/kzx/tzgg/202302/t20230216_11025677.html"
 ],
 [
  "马移民局 · 入境要求",
  "https://www.immigration.gov.mv/visa/tourist-visa"
 ],
 [
  "IMUGA · 免费旅客申报",
  "https://imuga.immigration.gov.mv/traveller"
 ]
];
let activeDay=0;
$('#story-strip').innerHTML=days.map((d,i)=>`<button data-story="${i}" aria-pressed="${i===0}"><span>0${i+1} / MAY</span><strong>${d.short}</strong><small>${d.group}</small></button>`).join('');
function renderDay(focusTab=false){
 const d=days[activeDay];
 $('#day-tabs').innerHTML=days.map((x,i)=>`<button id="day-tab-${i}" role="tab" aria-controls="day-content" aria-selected="${i===activeDay}" tabindex="${i===activeDay?0:-1}" class="${i===activeDay?'active':''}" data-day="${i}">5月${i+1}日</button>`).join('');
 $('#day-content').setAttribute('aria-labelledby',`day-tab-${activeDay}`);
 $('#day-content').innerHTML=`<div class="day-kicker">${d.tag}</div><h3>${d.title}</h3><p class="day-summary">${d.intro}</p><div class="schedule">${d.slots.map(([time,title,text])=>`<div class="schedule-item"><span class="schedule-time">${time}</span><div><h4>${title}</h4><p class="schedule-text">${text}</p></div></div>`).join('')}</div><div class="daily-dining"><h4>今天怎么吃喝 / ALL-INCLUSIVE</h4><p>${d.food}</p></div><div class="day-tip">导演提醒 / ${d.tip}</div>`;
 $('#stage-art').src='assets/'+d.image;$('#stage-art').alt=d.alt;$('#scene-bubble').innerHTML=d.bubble;$('#scene-prop').textContent=d.prop;$('#stage-location').textContent=d.place;$('#stage-number').textContent=`SCENE 0${activeDay+1} / 05`;$('.stage-window').dataset.scene=activeDay;$('#day-date').textContent=`2027.${d.date} · ${d.group}`;
 $('#prev-day').disabled=activeDay===0;$('#next-day').disabled=activeDay===4;
 document.querySelectorAll('[data-story]').forEach(b=>{const on=Number(b.dataset.story)===activeDay;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 document.querySelectorAll('[data-day]').forEach(b=>b.addEventListener('click',()=>{activeDay=Number(b.dataset.day);renderDay(true);}));
 if(focusTab)$(`#day-tab-${activeDay}`).focus({preventScroll:true});
}
document.querySelectorAll('[data-story]').forEach(b=>b.addEventListener('click',()=>{activeDay=Number(b.dataset.story);renderDay();}));
$('#prev-day').addEventListener('click',()=>{activeDay=Math.max(0,activeDay-1);renderDay();});
$('#next-day').addEventListener('click',()=>{activeDay=Math.min(4,activeDay+1);renderDay();});
$('#day-tabs').addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();activeDay=e.key==='Home'?0:e.key==='End'?4:(activeDay+(e.key==='ArrowRight'?1:4))%5;renderDay(true);}});
const inquiry="您好，请询2027年5月1日入住、5月5日退房，5天4晚，4名成人、2对夫妻。一对北京出发、一对成都出发；先按5月6日回国预留，需核两地往返航班与上岛衔接。\n请分别报价：①OZEN LIFE MAADHOO一套Earth Pool Pavilion双卧泳池沙屋，与两间Wind Villa with Pool泳池水屋；②OZEN RESERVE BOLIFUSHI一套双卧滑梯水屋，与一套Earth Pool Pavilion双卧沙屋；③丽思卡尔顿与华尔道夫一套双卧私池别墅，与两间单卧别墅。\n以四成人四晚总价比较，逐项列：具体房型及两间卧室床型/独立卫浴、四人餐标、指定酒水与迷你吧、四人往返上岛交通、全部税费及第3/4成人附加费用。不要使用2成人+2儿童价格；双卧能住4人不代表餐饮和船费已含4人。\n全程预算目标每人2万–2.5万元，四人8万–10万元。暂按每人机票7000元、活动保险机动2000元预留，酒店+餐饮酒水+往返接送+全部税费合计目标为四人四晚4.4万–6.4万元。这是预算线，不是已有报价；若超出，请明确差额，不自动加预算。\n请写明BB/HB/FB/AI或酒店专属餐标；三餐是否仅指定套餐、哪些餐厅和菜品另收费、酒水品牌及营业时段、特色餐次数、四晚是否达到赠项最低晚数、餐标起止与离店午餐规则。\nMaadhoo重点核：M6m海底餐厅、LONU、每人一次日落海钓/巡航、向导浮潜、一次60分钟SPA或持证潜水的2027权益及费用。Reserve、丽思、华尔道夫请另列海钓/大物包船、特色餐、酒水和SPA，不默认全含。海钓四人同船、晚餐四人同桌；活动名额、海况取消与退款规则请列明。\n偏好四个人一起吃好玩好，孩子尽量少，但不要求全岛禁童。请申请远离儿童设施的房位、说明可用成人区域和用餐限制；不要承诺无法核实的儿童数量。请列币种、报价有效期、付款及取消改期条款。";

$('#inquiry-text').textContent=inquiry;
$('#copy-inquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(inquiry);$('#copy-status').textContent='已复制四成人完整询价单。';}catch{$('#copy-status').textContent='浏览器未允许复制，请长按上方文字或保存完整剧本。';}});
$('#source-links').innerHTML=sources.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a>`).join('');
$('#export-plan').addEventListener('click',()=>{
 const extraComparisons=Array.from(document.querySelectorAll('#islands .other-islands p'),p=>p.textContent).join('\n\n');
 const supplement=document.querySelector('#islands').innerText+'\n\n'+extraComparisons+'\n\n'+document.querySelector('#rooms').innerText+'\n\n'+document.querySelector('#booking').innerText;
 const text=`四个人，一座岛 · 2027五一五日马代小剧场\n2027-05-01入住、05-05离岛，共4晚；建议预留05-06回国。\n重点：四人一起吃好玩好，孩子尽量少；可一套双卧或两间单卧。\n示范主案：OZEN LIFE MAADHOO，尚未锁岛或订房；对照奥臻瑞泽、丽思、华尔道夫等。\n2027五一实际房价、四人餐标和接送未取得有效总报价。\n\n${supplement}\n\n五天剧本\n${days.map((d,i)=>`DAY ${i+1} · 2027.${d.date} · ${d.title}\n${d.intro}\n${d.slots.map(([time,title,t])=>`${time}｜${title}\n${t}`).join('\n')}\n吃喝：${d.food}\n提醒：${d.tip}`).join('\n\n')}\n\n预算：每人2万–2.5万元，四人8万–10万元。假设机票7000、活动保险机动2000元/人，酒店餐饮接送税费目标四人四晚4.4万–6.4万元；双卧一套或单卧两间使用同一总额比较。这是预算倒推，不是实时报价。\n\n询价单\n${inquiry}\n\n来源（研究日期2026-10-24）\n${sources.map(([n,u])=>n+'\n'+u).join('\n')}\n\n出发前重核航班、入境和免费IMUGA要求；下海以潜店和当天海况为准。`;
 const blob=new Blob([text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='2027马代-四人五天-选岛房型餐标与询价.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#export-status').textContent='已生成完整规划，含选岛、四成人房型、订购说明和五天日程。';
});
renderDay();

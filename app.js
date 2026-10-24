'use strict';
const $=s=>document.querySelector(s);
const days=[
 {date:'05.01',short:'上岛，四人会合',title:'先干杯，再慢慢认识这座岛。',tag:'ACT 01 · HELLO, SANGELI',group:'四人一起',image:'paper-island.svg',alt:'纸片岛屿、水屋与抵岛会合的四位旅伴',bubble:'北京组 × 成都组<br>终于，在同一片海见面。',prop:'✈',place:'MLE → 圣吉利 · 抵岛日',intro:'今天不赶项目。把人送到岛上、把后面几天约好，再一起看第一场日落。',slots:[['抵岛后','入住 + 一次约齐','酒店柜台会合、拼船上岛，入住两间水屋。前台一次约好导览浮潜、海钓、两顿特色餐和四人SPA；然后领装备、试面镜。'],['16:00','主岛散步，先拍一张合照','若已抵岛，沿沙滩熟悉餐厅、潜店和活动集合点；顺路尝尝Hedhikaa Hut的马代小点心。'],['日落前','The Rock，四个人的第一杯','去日落吧看海。两对夫妻互相拍照，约好最后一晚再回来同机位拍一张。'],['19:30','The Courtyard晚餐','第一晚就在主餐厅轻松吃。饭后各自散步，早点休息，不安排赶时间的出海。']],tip:'当天能否赶上下午和日落，取决于两队航班、拼船等待与接送安排。晚到就直接入住吃饭，后面的主线不受影响。'},
 {date:'05.02',short:'去海里看一看',title:'今天，四个人一起去看鱼。',tag:'ACT 02 · UNDER THE BLUE',group:'四人浮潜 + 夫妻休息',image:'reef-day.svg',alt:'四位穿救生衣的纸片旅伴浮潜，水下有鱼、珊瑚与海龟的想象场景',bubble:'今天的共同话题：<br>刚刚那条鱼，你看见了吗？',prop:'≈',place:'导览浮潜 → One Banyan成人小岛',intro:'第一个完整岛日先玩海。把最期待的导览浮潜放前面，天气不合适还有后两天可以调。',slots:[['早餐后','跟向导一起浮潜','按潜店确认的集合时间出发，优先使用套餐含的导览浮潜。四人先听简报、试装备；是否适合下水由潜店评估，不自行进入屋礁。'],['12:30','午餐，然后回房午休','在The Courtyard吃午餐，避开正午强晒。照片先放一边，好好睡个午觉。'],['15:30','去One Banyan成人岛泳池','穿过栈桥，两对夫妻分开游泳、拍照或找躺椅看海。成人区域只在日出至日落适用，具体规则听酒店说明。'],['19:00','JustWok，四个人的聚餐','优先预约这家亚洲风味特色餐厅，一起分享当天拍的照片。之后按酒店当周安排看现场音乐，累了就回房。']],tip:'海龟和鱼群都是随缘目击，插画不代表保证能看到。特色餐按预订确认的餐次与营业时段安排。'},
 {date:'05.03',short:'划船，等一场日落',title:'白天一起划船，傍晚同船钓鱼。',tag:'ACT 03 · THE FOUR-PERSON CREW',group:'四人组队日',image:'boat-day.svg',alt:'四位纸片旅伴乘多尼船在橙色夕阳下海钓',bubble:'今天不比谁钓得多。<br>比谁先放下手机。',prop:'☀',place:'水上活动中心 → 日落海钓',intro:'这一天把四个人的热闹放在一起。海钓后不赶特色餐，给返航和天气留出余地。',slots:[['08:30','双人皮划艇或SUP','早餐后去水上中心，在许可海域体验。两对夫妻换着拍照，先问领取规则、时长和当天可开放项目，不做远距离比赛。'],['10:30','Muraka Centre，小岛的另一面','了解海洋保护、珊瑚和回收；参观或讲解是否开放、是否需要预约以现场安排为准。若不开放，就改主岛散步。'],['午后至日落','午休后，四个人去海钓','按酒店通知集合，参加套餐内的日落海钓。四人同船看夕阳，不保证有渔获，是否能料理渔获另问酒店。'],['回岛后','The Courtyard晚餐','今天不排必须准点到的特色餐，回岛后再吃晚饭。还有精神就去酒吧坐一会儿，没精神就回水屋听海。']],tip:'先做第2、3天的海上活动，第4天可用于天气改期。皮划艇/SUP也要听水上中心的海况与许可范围。'},
 {date:'05.04',short:'各自约会，慢一点',title:'今天，把时间还给两个人。',tag:'ACT 04 · A DATE FOR TWO, TWICE',group:'夫妻各自约会',image:'couple-day.svg',alt:'两对纸片夫妻在棕榈与海边SPA小屋旁分别休息',bubble:'一起旅行，<br>也给彼此一点两人世界。',prop:'♡',place:'ELENA SPA → 水屋栈桥 → Just Grill',intro:'我会把最后一个完整白天留给SPA和约会。两对夫妻分头过半天，晚上再用一顿好饭收尾。',slots:[['上午','两组分别做45分钟SPA','四位成人各用一次套餐SPA，争取相邻或同一时段。双人房、护理内容与是否能同时做，由SPA预约确认。'],['12:30','午餐 + 水屋里发呆','午餐后回房休息。今天不加体验潜水，也不额外堆项目，就给水屋本身一点时间。'],['15:30','四人互拍，然后分头看日落','沿水屋栈桥和主岛沙滩拍合照，每对各拍20–30分钟，之后自由活动。避开他人房间和私人平台。'],['19:00','Just Grill，两桌双人晚餐','优先预约第二次特色餐，两对夫妻各一张桌。点好吃的，聊一点不赶时间的话；饭后愿意的话，四人再碰杯。']],tip:'若前面海上项目因天气取消，今天优先补出海，再和酒店协调SPA、餐厅改期。别把任何一次体验当作保证能排上。'},
 {date:'05.05',short:'最后一眼海，回家',title:'把海装进口袋，慢慢说再见。',tag:'ACT 05 · SEE YOU, SANGELI',group:'四人收尾 + 各自返程',image:'paper-island.svg',alt:'四位旅伴与水屋、椰岛和快艇的告别纸片场景',bubble:'五天的故事结束。<br>四个人的相册，刚刚开始。',prop:'↗',place:'圣吉利 → MLE → 北京 / 成都',intro:'住满4晚，5月5日离岛。今天只留早餐、告别与返程，不把最后一天写成又一个完整游玩日。',slots:[['07:30','早餐 + 最后一组合照','早点吃早餐，去第一天的同机位补一张。航班较早时，一切按酒店集合时间提前。'],['09:00','收行李，核对自费账单','归还装备、确认护照和往返接送。手机里的照片先备份，行李里留一套方便返程的衣服。'],['11:00前','结束套餐消费','当前Serenity Plan在离店日11:00结束，12:00退房。不要默认午餐、酒水或延迟退房仍免费。'],['按船班','快艇返机场，各自回家','船班由酒店配合两队国际航班安排，别只按50分钟航程倒推。回国可能5月5日，也可能5月6日，按国内落地日确认。']],tip:'我建议先给5月6日留回国余量。若5月5日必须到家，只有找到两队都能衔接的当日回国航班，这个4晚方案才成立。'}
];
const sources=[
 ['圣吉利 · 官方Serenity Plan与餐饮','https://coloursofoblu.com/oblu-select-sangeli/en/serenity-plan'],
 ['圣吉利 · 2026年7月版套餐PDF','https://cob-ucmsapi.coloursofoblu.com/OBLU/images/albumFilee4a6ca18-cb68-4978-93fd-c2946c616878oblu-select-sangeli---the-serenity-plan---july-2026.pdf.pdf'],
 ['圣吉利 · 官方体验介绍','https://coloursofoblu.com/oblu-select-sangeli/en/experiences'],
 ['Maldivian · 官方目的地','https://maldivian.aero/destinations/'],
 ['Maldivian · 中国航线历史公告','https://maldivian.aero/media/2025/09/04/maldivian-unveils-promotional-fares-to-china.html'],
 ['马代气象局 · 气候与季风','https://www.meteorology.gov.mv/climate'],
 ['中国外交部 · 中马互免签证公告','https://www.fmprc.gov.cn/wjbzwfwpt/kzx/tzgg/202302/t20230216_11025677.html'],
 ['中国领事服务网 · 行前提示','https://cs.mfa.gov.cn/zggmcg/ljmdd/yz_645708/medf_646950/'],
 ['马移民局 · 入境要求','https://www.immigration.gov.mv/visa/tourist-visa'],
 ['IMUGA · 免费旅客申报','https://imuga.immigration.gov.mv/traveller']
];
let activeDay=0;
$('#story-strip').innerHTML=days.map((d,i)=>`<button data-story="${i}" aria-pressed="${i===0}"><span>0${i+1} / MAY</span><strong>${d.short}</strong><small>${d.group}</small></button>`).join('');
function renderDay(focusTab=false){
 const d=days[activeDay];
 $('#day-tabs').innerHTML=days.map((x,i)=>`<button id="day-tab-${i}" role="tab" aria-controls="day-content" aria-selected="${i===activeDay}" tabindex="${i===activeDay?0:-1}" class="${i===activeDay?'active':''}" data-day="${i}">5月${i+1}日</button>`).join('');
 $('#day-content').setAttribute('aria-labelledby',`day-tab-${activeDay}`);
 $('#day-content').innerHTML=`<div class="day-kicker">${d.tag}</div><h3>${d.title}</h3><p class="day-summary">${d.intro}</p><div class="schedule">${d.slots.map(([time,title,text])=>`<div class="schedule-item"><span class="schedule-time">${time}</span><div><h4>${title}</h4><p class="schedule-text">${text}</p></div></div>`).join('')}</div><div class="day-tip">导演提醒 / ${d.tip}</div>`;
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
const inquiry=`您好，请询OBLU SELECT Sangeli（圣吉利岛）2027年5月1日入住、5月5日退房，5天4晚：4位成人、2对夫妻，2间基础水屋，每间2人，连住不换房。优先Serenity Plan；两间尽量靠近但请说明是否能保证。\n一对北京出发，一对成都出发，先核实两队往返航班、5/1上岛和5/5离岛的快艇衔接；回国可先按5/6落地预留，班次以2027可售为准。\n全程预算目标每人¥25,000，四人¥100,000；酒店目标每间2人4晚不超过¥27,000，两间不超过¥54,000，需含餐标、往返快艇及全部强制税费。这个数字是询价上限，不是已有报价。水屋超预算时请给同岛基础沙屋报价；若按每人¥20,000全程预算，酒店目标为每间2人4晚¥20,000以内。\n请明确：具体房型/床型、套餐餐饮酒水范围、4晚是否每人含2次特色餐与1次45分钟SPA、导览浮潜和日落海钓是否包含、活动预约/取消规则、出入岛等待与船班、退房日权益截止时间、全部自费项目、币种与取消改期条款。两次特色餐优先JustWok四人桌与Just Grill两张双人桌；4人导览浮潜与海钓同组、SPA两组相邻时段。以上权益均需在2027合同逐项确认。`;
$('#inquiry-text').textContent=inquiry;
$('#copy-inquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(inquiry);$('#copy-status').textContent='已复制，直接带着这份圣吉利方案询价。';}catch{$('#copy-status').textContent='浏览器未允许复制，请长按上方文字或保存完整剧本。';}});
$('#source-links').innerHTML=sources.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a>`).join('');
$('#export-plan').addEventListener('click',()=>{const text=`这次，就去圣吉利 · 四个人的五日小剧场\n推荐：OBLU SELECT Sangeli\n2027年5月1日入住、5月5日离岛，5天4晚。建议预留5月6日回国。\n两对夫妻，2间基础水屋，每间2人，连住4晚，优先Serenity Plan。\n理由：屋礁和海上活动适合四人一起玩，成人小岛与SPA也留得出夫妻独处。\n所有钟点为建议时段，不是酒店运行表；以酒店2027确认为准。\n\n${days.map((d,i)=>`DAY ${i+1} · 2027.${d.date} · ${d.title}\n${d.intro}\n${d.slots.map(([time,title,t])=>`${time}｜${title}\n${t}`).join('\n')}\n提醒：${d.tip}`).join('\n\n')}\n\n每人预算目标：¥25,000（非报价）\n往返机票7500 + 酒店餐标快艇13500 + 活动保险杂费1500 + 余量2500。\n四人合计¥100,000。酒店采购目标¥27,000/间/4晚/2人，含约定餐标、快艇、全部强制税费。\n若压到¥20,000/人，先询同岛基础沙屋4晚含税含船含餐≤¥20,000/间/2人，未证明已有此价。\n\n入住先预约：D2导览浮潜、D3日落海钓、两次特色餐、D4四位成人各45分钟SPA。\n现行2026年7月版4–7晚套餐有上述权益，2027须逐项重核；离店日11:00套餐消费结束、12:00退房，不默认含午餐。\n\n询价文本\n${inquiry}\n\n官方来源（研究日期2026-10-24）\n${sources.map(([n,u])=>n+'\n'+u).join('\n')}\n\n行前：假设持中国普通护照，当前30天内短期旅游免签；护照按6个月以上余期准备，每人在抵达前96小时内免费提交IMUGA。出发前重核政策，备齐酒店确认单和返程票。下海以潜店评估与现场指引为准。`;
 const blob=new Blob([text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='2027圣吉利岛-四人五天完整剧本.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#export-status').textContent='五天完整剧本已生成，包含日程、预算、预约与询价清单。';});
renderDay();

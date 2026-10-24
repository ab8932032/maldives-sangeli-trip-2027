# 四个人，一座岛 · 圣吉利五日旅行小剧场

为两对夫妻规划的马尔代夫圣吉利岛旅行网站：一对北京出发，一对成都出发，以纸片小剧场展示每日行程、选岛理由、住宿与预算、预约事项和询价清单。

## 旅行计划

- 计划于2027年5月1日入住、5月5日离岛，5天4晚；建议为回国预留5月6日。
- 推荐OBLU SELECT Sangeli，两间双人基础水屋连住4晚。
- 每人预算目标人民币25,000元，并提供每人20,000元的沙屋询价思路。
- 房价、机票、接送和活动均不是实时订单或报价。套餐及入境要求依据研究时的官方资料，预订和出发前需要重新确认2027年的实际安排。

## 本地预览

这是纯静态网站，使用HTML、CSS、JavaScript和SVG插画，无构建依赖，也不需要API密钥。

在网站根目录运行（需要Python 3）：

```bash
python -m http.server 8000
```

浏览器打开 http://localhost:8000 。点击日期可切换五天行程，并可复制询价清单或下载完整旅行剧本。

## 文件

`index.html` 为入口，`styles.css` 和 `itinerary.css` 为样式，`app.js` 为交互与行程内容，`assets/` 保存纸片插画和网站图标。可直接部署到GitHub Pages或其他静态站点托管服务。

## 在线访问

- [公开旅行站点](https://maldives-paper-holiday-2027.zz-jacky-zheng.chatgpt.site/)
- [GitHub Pages](https://ab8932032.github.io/maldives-sangeli-trip-2027/)

GitHub Pages 从 main 分支根目录发布，后续推送会更新站点。

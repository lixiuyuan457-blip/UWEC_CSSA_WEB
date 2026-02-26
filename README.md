# UWEC CSSA Website

欢迎使用 UW-Eau Claire 中国学生学者协会 (CSSA) 官方网站！

## 项目概述

这是一个完全由HTML、CSS和JavaScript构建的现代化响应式网站，提供中英文支持。网站展示了CSSA的使命、活动、团队信息，以及一个成员注册表单。

## 项目结构

```
cssa/
├── index.html              # 首页
├── about.html              # 关于页面
├── events.html             # 活动页面
├── new-students.html       # 新生指南
├── team.html               # 团队页面
├── contact.html            # 联系及加入页面
├── css/
│   └── styles.css          # 所有样式（响应式设计）
├── js/
│   ├── main.js             # 主要功能（语言切换、动态内容等）
│   └── data.js             # 事件和团队数据
└── README.md               # 本文件
```

## 主要功能

### 1. 响应式设计 (Responsive Design)
- 支持桌面、平板和手机等多种设备
- 灵活的网格布局
- 优化的移动端导航

### 2. 多语言支持 (中英文)
- 点击右上角语言按钮切换中英文
- 语言偏好保存在浏览器localStorage中
- 所有页面内容都有中英文翻译

### 3. 动态事件列表
- 事件数据存储在 `js/data.js` 中
- 自动根据选择的语言显示事件信息
- 易于添加新事件

### 4. 导航菜单
- 清晰的页面导航结构
- 悬停效果
- 活跃链接指示

### 5. 联系表单
- 收集用户信息的表单
- 表单数据存储在浏览器localStorage中
- 支持中英文提交

## 页面介绍

### 首页 (index.html)
展示CSSA的简介、特色事件和加入理由。

### 关于页面 (about.html)
详细介绍CSSA的使命、目标和历史。

### 活动页面 (events.html)
动态显示所有CSSA活动，支持中英文切换。

### 新生指南 (new-students.html)
为新生提供在UWEC生活的实用建议和资源。

### 团队页面 (team.html)
介绍CSSA执行委员会的成员。

### 联系页面 (contact.html)
提供联系方式和成员注册表单。

## 如何使用

### 基本使用
1. 在浏览器中打开 `index.html` 文件
2. 使用导航菜单浏览不同页面
3. 点击右上角按钮切换语言

### 添加新事件
编辑 `js/data.js` 文件，在 `eventsData` 数组中添加新的事件对象：

```javascript
{
    id: 7,
    title_en: "Event Title in English",
    title_zh: "活动中文标题",
    date: "2024-MM-DD",
    time: "HH:MM AM/PM - HH:MM AM/PM",
    location_en: "Location in English",
    location_zh: "中文地点",
    description_en: "English description",
    description_zh: "中文描述",
    image: "emoji"
}
```

### 编辑团队成员
编辑 `js/main.js` 文件中的 `teamMembers` 数组来更新团队信息。

### 添加翻译
编辑 `js/main.js` 文件中的 `translations` 对象来添加新的文本翻译。

## 技术特点

### CSS
- 使用CSS Grid和Flexbox进行布局
- CSS变量（自定义属性）便于颜色管理
- 完整的响应式设计（媒体查询）
- 平滑的过渡和悬停效果

### JavaScript
- localStorage API用于保存用户偏好
- DOM操作动态更新内容
- 事件监听器处理用户交互
- 高效的事件循环处理

### 可访问性
- 语义化的HTML结构
- 适当的颜色对比度
- 清晰的表单标签
- 响应式设计支持各种设备

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 现代移动浏览器

## 自定义指南

### 颜色主题
在 `css/styles.css` 中的 `:root` 部分更改颜色变量：

```css
:root {
    --primary-color: #d4a574;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    /* ... 其他颜色 */
}
```

### 字体
在 `css/styles.css` 中的 `body` 规则中更改 `font-family` 属性。

### Logo和品牌
- 在HTML中的 `.logo` 元素中替换logo文本或图片
- 更新网站标题和meta标签

## 表单数据

表单提交的数据默认保存在浏览器的localStorage中（键名: `formSubmissions`）。
在生产环境中，应该将表单数据发送到后端服务器进行处理。

## 部署建议

1. 使用网站托管服务（GitHub Pages, Netlify, Vercel等）
2. 配置自定义域名
3. 启用HTTPS
4. 添加邮件服务后端来处理表单提交
5. 设置分析工具追踪网站访问

## 未来改进建议

- [ ] 添加事件注册/RSVP功能
- [ ] 创建相册/图库页面
- [ ] 添加新闻/博客栏目
- [ ] 实现表单后端处理
- [ ] 添加社交媒体集成
- [ ] 创建管理面板用于动态更新内容
- [ ] 添加搜索功能
- [ ] 优化SEO

## 许可证

© 2024 UWEC Chinese Student & Scholar Association. All rights reserved.

## 支持

如有问题或建议，请联系CSSA：
- 邮件：cssa@uwec.edu
- 电话：(715) 836-CSSA (2772)
- 地点：Student Center, Room 102

祝你使用愉快！

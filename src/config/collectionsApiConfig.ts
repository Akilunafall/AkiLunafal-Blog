import type { CollectionsApiConfig } from "../types/config";

// 使用 favicon 服务获取网站图标
const favicon = (domain: string) => `https://favicon.im/${domain}`;

export const collectionsApiConfig: CollectionsApiConfig = {
	// 页面标题，留空则使用 i18n 翻译
	title: "",
	// 页面描述，留空则使用 i18n 翻译
	description: "",

	// API 收藏列表（按 category 分组）
	apis: [
		{
			category: "AI相关网站",
			description: "just AI",
			items: [
				{
					name: "ChatGPT",
					url: "https://chatgpt.com/",
					description:
						"OpenAI旗下ai产品",
					icon: favicon("chatgpt.com"),
					enabled: true,
				},
				{
					name: "Claude",
					url: "https://claude.ai/",
					description:
						"Anthropic旗下ai产品",
					icon: favicon("claude.ai"),
					enabled: true,
				},
				{
					name: "Gemini",
					url: "https://gemini.google.com/",
					description: "Google旗下ai产品",
					icon: favicon("gemini.google.com"),
					enabled: true,
				},
				{
					name: "Grok",
					url: "https://grok.com/",
					description: "SpaceXAI旗下ai产品，@功能挺方便的",
					icon: favicon("grok.com"),
					enabled: true,
				},
				{
					name: "DeepSeek开放平台",
					url: "https://platform.deepseek.com/api_keys",
					description: "DeepSeek官方API平台。",
					icon: favicon("deepseek.com"),
					enabled: true,
				},
				{
					name: "PriceAI",
					url: "https://priceai.cc/",
					description: "正规代充，项目地址https://github.com/dimthink/PriceAI",
					icon: favicon("priceai.cc"),
					enabled: true,
				},
				{
					name: "SchylerAI",
					url: "https://api.schyler.top/register?aff=PQCWSZ22G9HF",
					description: "中转站，坦白说我个人不太信任中转站，能官网直充还是官网直充吧",
					icon: favicon("api.schyler.top"),
					enabled: true,
				},
				{
					name: "JOJO Code",
					url: "https://jojocode.com/dashboard/overview",
					description: "中转站，坦白说我个人不太信任中转站，能官网直充还是官网直充吧",
					icon: favicon("jojocode.com"),
					enabled: true,
				},
				{
					name: "Skills Marketplace",
					url: "https://skillsmp.com/",
					description: "skill市场",
					icon: favicon("skillsmp.com"),
					enabled: true,
				},
				{
					name: "Figma",
					url: "https://www.figma.com/",
					description: "在线 UI/UX 设计协作工具，支持团队协作与 AI 辅助设计。",
					icon: favicon("figma.com"),
					enabled: true,
				},
				{
					name: "AI Hobbyist",
					url: "https://res.acgnai.top/",
					description:
						"ACGN 方向的AI资源聚合平台，提供模型下载、工具推荐与教程。",
					icon: favicon("acgnai.top"),
					enabled: true,
				},
				{
					name: "Google Stitch",
					url: "https://stitch.withgoogle.com/",
					description:
						"Google Labs 推出的 AI 原生 UI 设计工具，用文字或图片生成界面并导出代码。",
					icon: favicon("withgoogle.com"),
					enabled: true,
				},
			],
		},
		{
			category: "Tools",
			description: "一些实用工具",
			items: [
				{
					name: "在线绘图网站",
					url: "https://app.diagrams.net/",
					description: "用来给图片做一些标记的时候挺方便的",
					icon: favicon("https://app.diagrams.net/"),
					enabled: true,
				},
				{
					name: "图片查找 | SauceNAO",
					url: "https://saucenao.com/",
					description: "以图搜图引擎，支持查找动漫插画、同人图等图片来源。",
					icon: favicon("saucenao.com"),
					enabled: true,
				},
				{
					name: "网络测速",
					url: "https://test.ustc.edu.cn/",
					description:
						"中科大提供的网络测速工具，用于快速测试本地带宽与网络延迟。",
					icon: favicon("test.ustc.edu.cn"),
					enabled: true,
				},
				{
					name: "Online 3D Viewer",
					url: "https://3dviewer.net/#",
					description: "看3d打印文件时可以用",
					icon: favicon("https://3dviewer.net/#"),
					enabled: true,
				},
				{
					name: "rufes",
					url: "https://rufus.ie/en/#download",
					description: "非常好用的一款U盘工具",
					icon: favicon("https://rufus.ie/en/#download"),
					enabled: true,
				},
				{
					name: "转换云",
					url: "https://www.zhuanhuanyun.cn/?to=.zh-warp",
					description: "在线ncm转换网站",
					icon: favicon("https://www.zhuanhuanyun.cn/?to=.zh-warp"),
					enabled: true,
				},
				{
					name: "FreeConvert",
					url: "https://www.freeconvert.com/zh-CN",
					description: "支持大多数格式互相转换",
					icon: favicon("https://www.freeconvert.com/zh-CN"),
					enabled: true,
				},
			],
		},
		{
			category: "Embedded",
			description: "分享一些嵌入式，硬件相关的网站",
			items: [
				{
					name: "Wokwi",
					url: "https://wokwi.com/",
					description:
						"在线microcontroller仿真网站",
					icon: favicon("https://wokwi.com/"),
					enabled: true,
				},
				{
					name: "SerialWeb",
					url: "https://conductance-lab.xyz/SerialWeb/",
					description:
						"在线串口调试工具，支持下载到本地(想要什么功能自己写.jpg)",
					icon: favicon("https://conductance-lab.xyz/SerialWeb/"),
					enabled: true,
				},
				{
					name: "Interrupt",
					url: "https://interrupt.memfault.com/",
					description:
						"一个以嵌入式系统为核心的博客社区",
					icon: favicon("https://interrupt.memfault.com/"),
					enabled: true,
				},
				{
					name: "Vofa+",
					url: "https://www.vofa.plus/",
					description:
						"可拓展，好用的一个串口调试软件",
					icon: favicon("https://www.vofa.plus/"),
					enabled: true,
				},
				{
					name: "OpenMV",
					url: "https://docs.openmv.io/v5.0.1/openmvcam/tutorial/index.html",
					description:
						"OpenMV官方文档",
					icon: favicon("https://docs.openmv.io/v5.0.1/openmvcam/tutorial/index.html"),
					enabled: true,
				},
				{
					name: "K230",
					url: "https://www.kendryte.com/k230_canmv/zh/v1.5/quick_start.html",
					description:
						"K230官方文档",
					icon: favicon("https://www.kendryte.com/k230_canmv/zh/v1.5/quick_start.html"),
					enabled: true,
				},
				{
					name: "立创商城",
					url: "https://www.szlcsc.com/",
					description:
						"立创商城官网，可以在这里查找元器件的数据手册",
					icon: favicon("https://www.szlcsc.com/"),
					enabled: true,
				},
				{
					name: "Digikey",
					url: "https://www.digikey.cn/",
					description:
						"得捷官网，可以在这里查元器件的数据手册",
					icon: favicon("https://www.digikey.cn/"),
					enabled: true,
				},
				{
					name: "EPS32",
					url: "https://documentation.espressif.com/en/home",
					description:
						"ESP32官方资源平台",
					icon: favicon("https://documentation.espressif.com/en/home"),
					enabled: true,
				},
				{
					name: "STM32",
					url: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
					description:
						"STM32官方产品中心",
					icon: favicon("https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"),
					enabled: true,
				},
				{
					name: "Arduino",
					url: "https://docs.arduino.cc/",
					description:
						"Arduino官方技术文档",
					icon: favicon("https://docs.arduino.cc/"),
					enabled: true,
				},
				{
					name: "Learn-Arduino",
					url: "https://learn-arduino-red.vercel.app/",
					description:
						"面向初学者的arduino交互式入门学习网站",
					icon: favicon("https://learn-arduino-red.vercel.app/"),
					enabled: true,
				},
				{
					name: "Platformio",
					url: "https://platformio.org/",
					description:
						"面向多种microcontroller的嵌入式开发工具",
					icon: favicon("https://platformio.org/"),
					enabled: true,
				},
				{
					name: "FreeRTOS",
					url: "https://docs.freertos.org/Documentation/00-Overview",
					description:
						"FreeRTOS官方文档",
					icon: favicon("https://docs.freertos.org/Documentation/00-Overview"),
					enabled: true,
				},
			],
		},
		{
			category: "前端组件库",
			description: "设计参考与开源UI，动效组件库",
			items: [
				{
					name: "One Page Love",
					url: "https://onepagelove.com/",
					description: "单页设计参考，汇集 Landing Page 模板与创意参考。",
					icon: favicon("onepagelove.com"),
					enabled: true,
				},
				{
					name: "Mobbin",
					url: "https://mobbin.com/",
					description: "移动端设计参考，收录大量 App 界面截图与交互模式。",
					icon: favicon("mobbin.com"),
					enabled: true,
				},
				{
					name: "Awwwards",
					url: "https://www.awwwards.com/",
					description: "全球优秀网页设计作品评选平台，汇集创意灵感与设计趋势。",
					icon: favicon("awwwards.com"),
					enabled: true,
				},
				{
					name: "shadcn/ui",
					url: "https://ui.shadcn.com/",
					description: "现代 UI 组件库",
					icon: favicon("shadcn.com"),
					enabled: true,
				},
				{
					name: "HeroUI",
					url: "https://heroui.com/",
					description: "现代 UI 组件库",
					icon: favicon("heroui.com"),
					enabled: true,
				},
				{
					name: "Uiverse",
					url: "https://uiverse.io/",
					description:
						"社区驱动的开源 UI 元素库，提供按钮、输入框、卡片等精美组件。",
					icon: favicon("uiverse.io"),
					enabled: true,
				},
				{
					name: "CodePen",
					url: "https://codepen.io/",
					description:
						"优秀参考代码库，可实时编写和分享 HTML/CSS/JS 代码片段。",
					icon: favicon("codepen.io"),
					enabled: true,
				},
				{
					name: "React Bits",
					url: "https://www.reactbits.dev/",
					description: "动画组件库，实用且易于集成到项目中。",
					icon: favicon("reactbits.dev"),
					enabled: true,
				},
				{
					name: "Magic UI",
					url: "https://magicui.design/",
					description: "动画组件库，提供可直接复制使用的 UI 动效组件。",
					icon: favicon("magicui.design"),
					enabled: true,
				},
				{
					name: "Aceternity UI",
					url: "https://ui.aceternity.com/",
					description: "动画组件库，提供视觉效果出色的开源组件。",
					icon: favicon("aceternity.com"),
					enabled: true,
				},
				{
					name: "Canvas UI",
					url: "https://canvasui.dev/",
					description: "3D交互库，提供可直接参考和使用的 UI 组件。",
					icon: favicon("canvasui.dev"),
					enabled: true,
				},
				{
					name: "Animation Svelte",
					url: "https://animation-svelte.vercel.app/",
					description: "Svelte 动画组件库，提供可直接复制使用的动效组件。",
					icon: favicon("animation-svelte.vercel.app"),
					enabled: true,
				},
				{
					name: "Hover.dev",
					url: "https://www.hover.dev/",
					description: "动画组件库，提供丰富的悬停交互与 UI 动效参考。",
					icon: favicon("hover.dev"),
					enabled: true,
				},
				{
					name: "Inspira UI",
					url: "https://inspira-ui.com/",
					description: "Vue / Nuxt 动画组件库，提供现代化 UI 组件与动效。",
					icon: favicon("inspira-ui.com"),
					enabled: true,
				},
				{
					name: "Cult UI",
					url: "https://www.cult-ui.com/",
					description: "React 动画组件库，提供可直接复制使用的 UI 组件。",
					icon: favicon("cult-ui.com"),
					enabled: true,
				},
				{
					name: "Iconify",
					url: "https://iconify.design/",
					description: "图标库，汇集超过 20 万个图标，支持按需加载。",
					icon: favicon("iconify.design"),
					enabled: true,
				},
				{
					name: "Sketchfab",
					url: "https://sketchfab.com/",
					description: "3D模型库，支持在线预览和免费下载。",
					icon: favicon("sketchfab.com"),
					enabled: true,
				},
			],
		},
				{
			category: "BOT开源框架网站",
			description: "支持QQ、Discord等多平台的聊天机器人框架",
			items: [
				{
					name: "NapCat",
					url: "https://napneko.github.io/",
					description: "基于NTQQ的QQ机器人框架，支持插件扩展与多协议接入。",
					icon: favicon("napneko.github.io"),
					enabled: true,
				},
				{
					name: "AstrBot",
					url: "https://astrbot.app/",
					description:
						"多平台聊天机器人框架，支持 QQ、Discord、Telegram 等主流平台。",
					icon: favicon("astrbot.app"),
					enabled: true,
				},
				{
					name: "Mai-bot",
					url: "https://docs.mai-mai.org/",
					description: "音乐游戏 MaiMai 相关机器人，支持查分、排位等功能。",
					icon: favicon("mai-mai.org"),
					enabled: true,
				},
				{
					name: "NoneBot",
					url: "https://nonebot.dev/docs/",
					description:
						"Python 异步机器人框架，支持多平台适配器与丰富的插件生态。",
					icon: favicon("nonebot.dev"),
					enabled: true,
				},
				{
					name: "LLBot",
					url: "https://github.com/LLOneBot/LuckyLilliaBot",
					description: "基于 NTQQ 的轻量 QQ 机器人框架，支持 OneBot 协议。",
					icon: favicon("github.com"),
					enabled: true,
				},
			],
		},
		{
			category: "Touhou",
			description: "车万相关",
			items: [
				{
					name: "叮铃铃 · 东方市场: 同人一站式服务平台",
					url: "https://touhou.market/main/works",
					description:
						"东方同人市场",
					icon: favicon("https://touhou.market/main/works"),
					enabled: true,
				},
				{
					name: "秘封茶话",
					url: "https://mifengchahua.cn/wwnewspaper",
					description:
						"秘封茶话社团官网",
					icon: favicon("https://mifengchahua.cn/wwnewspaper"),
					enabled: true,
				},
				{
					name: "THB Wiki",
					url: "https://thwiki.cc/%E9%A6%96%E9%A1%B5",
					description:
						"东方同人市场",
					icon: favicon("https://thwiki.cc/%E9%A6%96%E9%A1%B5"),
					enabled: true,
				},
				{
					name: "东方人气投票",
					url: "https://toho-vote.info/",
					description:
						"东方人气投票官网",
					icon: favicon("https://toho-vote.info/"),
					enabled: true,
				},
				{
					name: "Fumo Spots",
					url: "https://fumo.touhouspots.com/",
					description:
						"你可以在这里看到世界各地的Fumoᗜˬᗜ",
					icon: favicon("https://fumo.touhouspots.com/"),
					enabled: true,
				},
				{
					name: "莉莉云",
					url: "https://cloud.lilywhite.cc/s/4ZUW?path=%2F&native.theme=1",
					description:
						"东方正作下载",
					icon: favicon("https://cloud.lilywhite.cc/s/4ZUW?path=%2F&native.theme=1"),
					enabled: true,
				},
				{
					name: "福建东方同号会",
					url: "https://koukoustreet.site/",
					description:
						"福建东方Project社群活动平台",
					icon: favicon("https://koukoustreet.site/"),
					enabled: true,
				},
				{
					name: "锦州冬季THP",
					url: "https://www.yystouhouhly.icu/",
					description:
						"锦州冬季THP官网",
					icon: favicon("https://www.yystouhouhly.icu/"),
					enabled: true,
				},
			],
		},
	],
};

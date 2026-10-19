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
		
		// {
		// 	category: "AI工具网站",
		// 	description: "模型排行、图像生成、提示词优化与开发平台",
		// 	items: [
		// 		{
		// 			name: "能力排行榜 | Artificial Analysis",
		// 			url: "https://artificialanalysis.ai/?intelligence-category=reasoning-vs-non-reasoning",
		// 			description:
		// 				"AI 模型推理能力对比分析平台，帮助理解不同模型的性能差异。",
		// 			icon: favicon("artificialanalysis.ai"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "能力排行榜 | AI Arena",
		// 			url: "https://arena.ai/leaderboard",
		// 			description: "AI 模型竞技排行榜，综合对比各大语言模型的能力表现。",
		// 			icon: favicon("arena.ai"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "ModelScope 魔搭社区",
		// 			url: "https://www.modelscope.cn/",
		// 			description: "阿里达摩院开源模型社区，提供丰富的 AI 模型与推理服务。",
		// 			icon: favicon("modelscope.cn"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "skill市场 | Skills Marketplace",
		// 			url: "https://skillsmp.com/",
		// 			description: "AI 技能市场，发现和分享各类 AI 工具与自动化工作流。",
		// 			icon: favicon("skillsmp.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "提示词优化 | PromptPilot",
		// 			url: "https://promptpilot.volcengine.com/",
		// 			description:
		// 				"火山引擎推出的 Prompt 优化工具，帮助提升大模型输出质量。",
		// 			icon: favicon("volcengine.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "资源站 | ACGN AI 资源站",
		// 			url: "https://res.acgnai.top/",
		// 			description:
		// 				"ACGN 方向的 AI 资源聚合平台，提供模型下载、工具推荐与教程。",
		// 			icon: favicon("acgnai.top"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "图像生成 | Oblivion Image Gallery",
		// 			url: "https://image.oblivionis.net/gallery",
		// 			description:
		// 				"免费的GPT AI 生成图像画廊，展示高质量的人工智能艺术作品。",
		// 			icon: favicon("oblivionis.net"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "设计工具 | Figma",
		// 			url: "https://www.figma.com/",
		// 			description: "在线 UI/UX 设计协作工具，支持团队协作与 AI 辅助设计。",
		// 			icon: favicon("figma.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "设计工具 | Google AI Studio",
		// 			url: "https://aistudio.google.com/",
		// 			description:
		// 				"Google 官方 AI 开发平台，支持 Chat/Build/Stream 三模式，可快速原型化 Gemini 应用。",
		// 			icon: favicon("aistudio.google.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "设计工具 | Google Stitch",
		// 			url: "https://stitch.withgoogle.com/",
		// 			description:
		// 				"Google Labs 推出的 AI 原生 UI 设计工具，用文字或图片生成界面并导出代码。",
		// 			icon: favicon("withgoogle.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "模型部署 | Ollama",
		// 			url: "https://ollama.com/",
		// 			description:
		// 				"本地运行大语言模型的轻量框架，支持一键部署 Llama、Qwen 等开源模型。",
		// 			icon: favicon("ollama.com"),
		// 			enabled: true,
		// 		},
		// 	],
		// },
		{
			category: "BOT开源框架网站",
			description: "支持 QQ、Discord 等多平台的聊天机器人框架",
			items: [
				{
					name: "NapCat",
					url: "https://napneko.github.io/",
					description: "基于 NTQQ 的 QQ 机器人框架，支持插件扩展与多协议接入。",
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
			category: "前端组件库",
			description: "设计参考与开源 UI、动效组件库",
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
			],
		},
		// {
		// 	category: "一些知识库",
		// 	description: "编程学习、算法练习与求职备考平台",
		// 	items: [
		// 		{
		// 			name: "Java 全栈知识体系",
		// 			url: "https://pdai.tech/",
		// 			description:
		// 				"涵盖 Java 核心、并发、JVM、框架、数据库与架构的全栈知识体系。",
		// 			icon: favicon("pdai.tech"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "JavaGuide",
		// 			url: "https://javaguide.cn/",
		// 			description:
		// 				"Java 学习与面试指南，覆盖 Java 基础、集合、并发、JVM 与 Spring 等核心知识。",
		// 			icon: favicon("javaguide.cn"),
		// 			enabled: true,
		// 		},
		// 		// {
		// 		// 	name: "异常教程",
		// 		// 	url: "https://www.exception.site/",
		// 		// 	description: "提供 JetBrains 系列 IDE 的安装教程与激活资源分享。",
		// 		// 	icon: favicon("exception.site"),
		// 		// 	enabled: true,
		// 		// },
		// 		{
		// 			name: "力扣 LeetCode",
		// 			url: "https://leetcode.cn/",
		// 			description:
		// 				"技术成长与算法练习平台，提供海量题库、面试题与编程竞赛。",
		// 			icon: favicon("leetcode.cn"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "牛客网",
		// 			url: "https://www.nowcoder.com/",
		// 			description:
		// 				"IT 求职备考与技术学习平台，提供笔试、面试题库与在线编程练习。",
		// 			icon: favicon("nowcoder.com"),
		// 			enabled: true,
		// 		},
		// 	],
		// },
		// {
		// 	category: "二次元资源站",
		// 	description: "动漫与漫画资源聚合观看平台",
		// 	items: [
		// 		{
		// 			name: "AGE 动漫",
		// 			url: "https://www.agedm.io/update",
		// 			description: "免费动漫资源聚合站，提供高清动漫在线观看与更新推送。",
		// 			icon: favicon("agedm.io"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "ManhwaTop",
		// 			url: "https://manhwatop.com/",
		// 			description: "韩漫与漫画阅读平台，收录热门连载与完结漫画资源。",
		// 			icon: favicon("manhwatop.com"),
		// 			enabled: true,
		// 		},
		// 	],
		// },
		// {
		// 	category: "API 接口",
		// 	description: "免费与开放的数据 API 服务平台",
		// 	items: [
		// 		{
		// 			name: "小小API",
		// 			url: "https://xxapi.cn/",
		// 			description: "免费 API 数据接口调用平台，提供多种聚合数据接口服务。",
		// 			icon: favicon("xxapi.cn"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "高德地图API",
		// 			url: "https://lbs.amap.com/",
		// 			description: "高德地图开放平台，提供地图、定位、导航等地理信息服务。",
		// 			icon: favicon("amap.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "聚合数据",
		// 			url: "https://www.juhe.cn/",
		// 			description:
		// 				"国内数据服务平台，提供短信、物流、新闻等多种 API 接口。",
		// 			icon: favicon("juhe.cn"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "有道翻译API",
		// 			url: "https://ai.youdao.com/",
		// 			description: "网易有道提供的翻译 API 服务，支持多语言文本互译。",
		// 			icon: favicon("youdao.com"),
		// 			enabled: true,
		// 		},
		// 		{
		// 			name: "Tavily",
		// 			url: "https://app.tavily.com/home",
		// 			description: "AI 优化的搜索引擎 API，为大模型提供实时网页检索能力。",
		// 			icon: favicon("tavily.com"),
		// 			enabled: true,
		// 		},
		// 	],
		// },
	],
};

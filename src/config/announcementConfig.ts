import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告列表（sort 越大越靠前）
	items: [
		{
			tag: "友链",
			title: "互换友链",
			content:
				"欢迎各位大佬互换友链，要求内容原创、稳定更新。申请前请先看友链页的说明，期待和你交换链接。",
			time: "2026-10-19",
			link: "/friends/",
			sort: 3,
		},
		{
			tag: "欢迎",
			title: "关于我的介绍",
			content:
				"欢迎来到我的博客，我是一名电子信息专业的学生，目前正朝着嵌入式，硬件方向努力，很高兴认识你，让我们一起加油！",
			time: "2026-10-18",
			link: "/about/",
			sort: 1,
		},
		{
			tag: "注意",
			title: "推荐使用电脑端打开此网站",
			content:
				"目前对手机端的适配不是很好，好多ui比例和功能失调了> <",
			time: "2026-10-19",
			link: "",
			sort: 5,
		},
		{
			tag: "留言",
			title: "使用留言功能需要打开代理",
			content:
				"留言板与文章评论的后端部署在Vercel，国内网络可能无法直接访问。如果留言列表一直加载失败、或消息发送不出去，请先开启代理再刷新页面。留言内容会公开展示，请勿填写身份证、住址等敏感信息，感谢理解～",
			time: "2026-10-19",
			link: "/guestbook/",
			sort: 4,
		},
		{
			tag: "音乐",
			title: "左下角可以打开音乐播放器～",
			content:
				"左下角的悬浮坞里藏着音乐播放器，歌单会慢慢补充。独立的音乐页还没上线，先在这里听叭————",
			time: "2026-10-19",
			link: "",
			sort: 2,
		},
	],

	// 是否允许用户关闭公告
	closable: true,

	// 进入网站（整页加载）时自动弹出公告弹窗；设为 false 即关闭该功能。
	// 站内 Swup 导航不会重复弹出，只在刷新或新开页面时触发
	autoOpen: true,
};

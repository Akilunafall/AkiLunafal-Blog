import type { FriendLink, FriendsPageConfig } from "../types/config";

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,

	// 尚未设置友链申请入口，因此不显示申请按钮。

	// 本站信息，用于友链申请指南弹窗中的站点信息展示
	siteInfo: {
		name: "Aki's Journey",
		desc: "记录学习历程与心得体会，也分享技术实践、兴趣项目和日常生活中的点滴。",
		url: "https://akilunafall.top",
		avatar: "https://akilunafall.top/assets/images/site-avatar.webp",
		email: "2830880096@qq.com",
	},

	// 注意事项，用于友链申请指南弹窗中的注意事项展示
	notes: [
		// {
		// 	title: "互换原则",
		// 	content: "请先将本站添加到您的友链页面，确认后会添加您的友链",
		// },
		// {
		// 	title: "链接维护",
		// 	content: "友链网站长期无法访问或内容违规，将会被移除",
		// },
		// {
		// 	title: "内容要求",
		// 	content: "内容积极向上，不含有任何含色情/反动/暴力等违法违规内容",
		// },
		{
			title: "站点要求",
			content: "支持 HTTPS，以原创内容为主，能够正常访问且有持续更新",
		},
	],

	// 对话气泡文案，滚动到申请区时逐个弹出并打字机显示
	// role: "cat" = 喵墩（左侧，作者头像）；"owner" = 站长（右侧，文字头像）
	chat: [
		{
			role: "cat",
			name: "酒狐",
			text: "来者何人？报上名号，本狐爪子底下可不收无名之辈。",
		},
		{
			role: "owner",
			name: "站长",
			text: "酒狐，不得无礼！！欢迎各位大佬来小破站。",
		},
		{
			role: "cat",
			name: "酒狐",
			text: "?!!抱歉> < 第一时间没认出大佬您，里边请，茶水管够，把这儿当自己窝就行喵~",
		},
	],
};

// 友链配置
export const friendsConfig: FriendLink[] = [

	{
		title: "夜樱手帐",
		imgurl: "https://rhsy.moe/images/avatar.jpg",
		desc: "阿海的博客，拼凑折腾与日常的碎片",
		siteurl: "https://rhsy.moe/",
		tags: ["Blog"],
		weight: 5,
		enabled: true,
	},
	{
		title: "ttcctctcのblog",
		imgurl: "https://blog.ttcctctc.top/img/avatar.webp",
		desc: "随便记点什么",
		siteurl: "https://blog.ttcctctc.top/",
		tags: ["Blog"],
		weight: 5,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	// 权重降序；同权重时保留配置列表中的原始顺序
	return friends
		.map((friend, index) => ({ friend, index }))
		.sort((a, b) => b.friend.weight - a.friend.weight || a.index - b.index)
		.map(({ friend }) => friend);
};

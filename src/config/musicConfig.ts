import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 在本配置文件把showInNavbar设为false即可关闭导航栏入口

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.6,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 官方实例 i-meto.com 歌单接口仍返回 200，但取音频的第二跳
		// type=url 已 404 —— 表现为列表加载正常却放不出声音。
		// qijieya 与 moeyao 均经实测全链路可用（歌单/音频/封面/歌词
		// 均 200 且带 Access-Control-Allow-Origin: *），字段名差异
		// （name/artist/cover）由 MusicManager 的归一化逻辑兼容
		api: "https://api.qijieya.cn/meting/?server=:server&type=:type&id=:id",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "17955431099",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）。
		// injahow 已无法连接（超时），不再列入
		fallbackApis: [
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "秋鳴りシンフォニー",
				artist: "Foxtail-Grass Studio / Lupinus 幻想写景 -風-",
				url: "/assets/music/Foxtail-Grass Studio - 秋鳴りシンフォニー.mp3",
				cover: "/assets/music/cover/Lupinus.webp",
				lrc: "",
			},
			{
				name: "幽霊楽団 - Fantastic dream style Take2",
				artist: "S-STYLE / 花映～はなうつり～",
				url: "/assets/music/幽霊楽団 - Fantastic dream style Take2 - - S-STYLE.mp3",
				cover:
					"/assets/music/cover/幽霊楽団 - Fantastic dream style Take2.webp",
				lrc: "",
			},
			{
				name: "幽霊楽団 - sound sepher",
				artist: "Foxtail-Grass Studio / Lupinus 幻想写景 -風-",
				url: "/assets/music/幽霊楽団 - sound sepher.mp3",
				cover: "/assets/music/cover/幽霊楽団 - sound sepher.webp",
				lrc: "",
			},
			{
				name: "思い浮かぶままに色々繋げて弾いてみた 3",
				artist: "魂音泉 / 东方流星少女 改(~aKino ryusei remix~)",
				url: "/assets/music/思い浮かぶままに色々繋げて弾いてみた 3 - Coro.mp3",
				cover:
					"/assets/music/cover/思い浮かぶままに色々繋げて弾いてみた 3.webp",
				lrc: "",
			},
			{
				name: "秋风のとおり道",
				artist:
					"趣味工房にんじんわいん / 飒 HAYATE 风神华伝(HAYATE ~ Fuujin Kaden)",
				url: "/assets/music/秋风のとおり道 - 趣味工房にんじんわいん.mp3",
				cover: "/assets/music/cover/秋风のとおり道.webp",
				lrc: "",
			},
			{
				name: "かぜのねいろ",
				artist: "凋叶棕 / 随",
				url: "/assets/music/凋叶棕 - かぜのねいろ.mp3",
				cover: "/assets/music/cover/かぜのねいろ.webp",
				lrc: "",
			},
			{
				name: "春眠猫の夢",
				artist: "Foxtail-Grass Studio / ゆきどけアゼリア",
				url: "/assets/music/Foxtail-Grass Studio - 春眠猫の夢.mp3",
				cover: "/assets/music/cover/春眠猫の夢.webp",
				lrc: "",
			},
			{
				name: "旧地獄街道を行く",
				artist: "Pizuyas Cell / 地底の草庵小座敷",
				url: "/assets/music/Pizuyas Cell - 旧地獄街道を行く.mp3",
				cover: "/assets/music/cover/旧地獄街道を行く.webp",
				lrc: "",
			},
			{
				name: "うたかたの風と蝉時雨",
				artist: "FELT / Little Planet(FELT-008)",
				url: "/assets/music/うたかたの風と蝉時雨 - FELT.mp3",
				cover: "/assets/music/cover/うたかたの風と蝉時雨 - FELT.webp",
				lrc: "",
			},
		],
	},

	// 可视化器配置[]
	visualizer: {
		background: {
			dark: "#000000",
			light: "#000000",
		},
		camera: {
			position: {
				x: 0,
				y: 32,
				z: 52,
			},
		},
		autoRotate: true,
		autoRotateSpeed: 0.3,
		height: {
			// 静态地形起伏高度，不播放时也会有轻微波动
			idle: 0.6,
			// 超低频高度，主要影响中央区域的大起伏
			subBass: 4.0,
			// 低频高度，主要跟随鼓点和低音起伏
			bass: 3.0,
			// 中低频高度，补充地形整体层次
			lowMid: 2.0,
			// 中频高度，影响流动感较强的区域
			mid: 2.5,
			// 中高频高度，影响外围零散跳动
			highMid: 2.0,
			// 高能量瞬间的随机尖峰高度
			energy: 4.0,
			// 普通点击/音频涟漪高度
			ripple: 3.0,
			// 白色强调涟漪高度
			rippleAccent: 1.0,
		},
		// 想要红色：用 #ff4444
		// 想要透明度：别塞进 rippleColor，单独加一个 rippleOpacity 或 rippleAlpha
		theme: {
			base1: "#000000",
			base2: "#000000",
			coolCore: "#16b8c9",
			coolEdge: "#69dce7",
			warmCore: "#8be8ee",
			warmEdge: "#d9ffff",
			rippleColor: "#3bcbd9",
			// 波纹冷暖锚点：安静/低频偏冷、明亮/高频偏暖，与地形冷暖同步联动
			rippleCool: "#3bcbd9",
			rippleWarm: "#d9ffff",
			fogColor: "#050810",
			glowIntensity: 0.86,
		},
	},
};

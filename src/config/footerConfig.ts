import type { FooterConfig } from "../types/config";

export const footerConfig: FooterConfig = {
	// 社交链接（mailto:/tel: 开头的链接不会在新标签打开）
	socialLinks: [
		{
			label: "GitHub",
			href: "https://github.com/Akilunafall",
			icon: "fa7-brands:github",
		},
		{
			label: "QQ",
			href: "https://qm.qq.com/q/uWpAQSC1p0",
			icon: "fa7-brands:qq",
		},
		{
			label: "B站",
			href: "https://space.bilibili.com/689856609?spm_id_from=333.1007.0.0",
			icon: "fa7-brands:bilibili",
		},
		{
			label: "邮箱",
			href: "mailto:2830880096@qq.com",
			icon: "material-symbols:mail",
		},
	],

	// 备案信息（icp/police 留空则不显示对应条目）
	beian: {
		icp: "",
		police: "",
		policeIcon: "",
		icpUrl: "",
		policeUrl: "",
	},

	// Powered by 信息
	poweredBy: [
		{ label: "框架", name: "Astro", href: "https://astro.build" },
	],
};

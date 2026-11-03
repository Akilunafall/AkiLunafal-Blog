import { execSync } from "node:child_process";

let lastUpdateCache: string | null | undefined;

/**
 * 读取仓库最近一次提交的时间（构建期执行），作为站点"最后更新于"的依据。
 *
 * 与文章 frontmatter 的 updated 不同，这里反映的是仓库最近一次被推送的提交时间，
 * 只要产生新提交（哪怕只改配置或样式），页脚的最后更新日期就会前进。
 *
 * 构建环境没有 git 或不在仓库内时返回 null，由调用方回退到其他日期来源。
 */
export function getLatestCommitDate(): string | null {
	if (lastUpdateCache !== undefined) return lastUpdateCache;

	try {
		const output = execSync("git log -1 --format=%cI", {
			encoding: "utf-8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
		lastUpdateCache = output ? output : null;
	} catch {
		// 无 git 可执行文件 / 非仓库 / 空仓库：交给调用方回退
		lastUpdateCache = null;
	}

	return lastUpdateCache;
}

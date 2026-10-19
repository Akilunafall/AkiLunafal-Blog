<script lang="ts">
	import { MessageCircle, Send, Trash2 } from "lucide-svelte";
	import { onMount } from "svelte";

	interface GuestbookEntry {
		id: string;
		nickname: string;
		content: string;
		createdAt: string;
	}

	const ENTRIES_KEY = "aki-lunafall-local-guestbook-v1";
	const PROFILE_KEY = "aki-lunafall-local-guestbook-profile-v1";
	const MAX_ENTRIES = 500;
	const MAX_CONTENT_LENGTH = 300;

	let entries = $state<GuestbookEntry[]>([]);
	let nickname = $state("");
	let content = $state("");
	let error = $state("");
	let storageAvailable = $state(true);

	function parseEntries(raw: string | null): GuestbookEntry[] {
		if (!raw) return [];

		try {
			const parsed: unknown = JSON.parse(raw);
			if (!Array.isArray(parsed)) return [];
			return parsed
				.filter(
					(entry): entry is GuestbookEntry =>
						!!entry &&
						typeof entry.id === "string" &&
						typeof entry.nickname === "string" &&
						typeof entry.content === "string" &&
						typeof entry.createdAt === "string",
				)
				.slice(0, MAX_ENTRIES);
		} catch {
			return [];
		}
	}

	function persistEntries(nextEntries: GuestbookEntry[]) {
		entries = nextEntries;
		try {
			localStorage.setItem(ENTRIES_KEY, JSON.stringify(nextEntries));
			storageAvailable = true;
		} catch {
			storageAvailable = false;
		}
	}

	function handleStorage(event: StorageEvent) {
		if (event.key === ENTRIES_KEY || event.key === null) {
			entries = parseEntries(event.newValue);
		}
	}

	onMount(() => {
		try {
			entries = parseEntries(localStorage.getItem(ENTRIES_KEY));
			nickname = localStorage.getItem(PROFILE_KEY) ?? "";
		} catch {
			storageAvailable = false;
		}
		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	});

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		error = "";
		const cleanNickname = nickname.trim();
		const cleanContent = content.trim();

		if (!cleanNickname) {
			error = "请填写昵称。";
			return;
		}
		if (cleanContent.length < 2 || cleanContent.length > MAX_CONTENT_LENGTH) {
			error = `留言长度需要在 2 到 ${MAX_CONTENT_LENGTH} 个字符之间。`;
			return;
		}

		const entry: GuestbookEntry = {
			id:
				typeof crypto !== "undefined" && "randomUUID" in crypto
					? crypto.randomUUID()
					: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
			nickname: cleanNickname.slice(0, 24),
			content: cleanContent,
			createdAt: new Date().toISOString(),
		};

		try {
			localStorage.setItem(PROFILE_KEY, entry.nickname);
		} catch {
			storageAvailable = false;
		}
		persistEntries([entry, ...entries].slice(0, MAX_ENTRIES));
		nickname = entry.nickname;
		content = "";
	}

	function deleteEntry(id: string) {
		persistEntries(entries.filter((entry) => entry.id !== id));
	}

	function formatDate(value: string) {
		const date = new Date(value);
		return Number.isNaN(date.getTime())
			? ""
			: new Intl.DateTimeFormat("zh-CN", {
					dateStyle: "medium",
					timeStyle: "short",
				}).format(date);
	}
</script>

<section class="local-guestbook" aria-labelledby="local-guestbook-title">
	<header class="local-guestbook__header">
		<h2 id="local-guestbook-title">留言板</h2>
		<p>留言只保存在当前浏览器，不会同步到其他设备或展示给其他访客。</p>
	</header>

	<form class="local-guestbook__form" onsubmit={handleSubmit}>
		<label>
			<span>昵称</span>
			<input
				bind:value={nickname}
				maxlength="24"
				name="nickname"
				autocomplete="nickname"
				placeholder="输入昵称"
				required
			/>
		</label>
		<label>
			<span>留言</span>
			<textarea
				bind:value={content}
				maxlength={MAX_CONTENT_LENGTH}
				name="message"
				placeholder="写下想记录的话"
				required
			/>
		</label>
		<div class="local-guestbook__form-footer">
			{#if error}
				<p class="local-guestbook__error" role="alert">{error}</p>
			{:else if !storageAvailable}
				<p class="local-guestbook__error" role="status">
					浏览器本地存储不可用，留言可能无法在刷新后保留。
				</p>
			{:else}
				<p class="local-guestbook__count">{content.trim().length}/{MAX_CONTENT_LENGTH}</p>
			{/if}
			<button class="local-guestbook__submit" type="submit">
				<Send size={16} aria-hidden="true" />
				<span>保存留言</span>
			</button>
		</div>
	</form>

	<div class="local-guestbook__list" aria-live="polite">
		<div class="local-guestbook__list-heading">
			<h3>本地留言</h3>
			<span>{entries.length}</span>
		</div>

		{#if entries.length === 0}
			<p class="local-guestbook__empty">
				<MessageCircle size={20} aria-hidden="true" />
				<span>这里还没有保存的留言。</span>
			</p>
		{:else}
			<ul>
				{#each entries as entry (entry.id)}
					<li class="local-guestbook__entry">
						<div class="local-guestbook__entry-main">
							<div class="local-guestbook__entry-meta">
								<strong>{entry.nickname}</strong>
								<time datetime={entry.createdAt}>{formatDate(entry.createdAt)}</time>
							</div>
							<p>{entry.content}</p>
						</div>
						<button
							class="local-guestbook__delete"
							type="button"
							aria-label={`删除 ${entry.nickname} 的留言`}
							title="删除留言"
							onclick={() => deleteEntry(entry.id)}
						>
							<Trash2 size={16} aria-hidden="true" />
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

<style>
	.local-guestbook {
		display: grid;
		gap: 1.5rem;
		width: 100%;
	}

	.local-guestbook__header {
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--line-color);
	}

	.local-guestbook__header h2,
	.local-guestbook__header p,
	.local-guestbook__list-heading h3,
	.local-guestbook__empty,
	.local-guestbook__entry p {
		margin: 0;
	}

	.local-guestbook__header h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	.local-guestbook__header p {
		margin-top: 0.4rem;
		color: var(--btn-content);
		opacity: 0.76;
	}

	.local-guestbook__form {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--line-color);
		border-radius: 8px;
		background: var(--card-bg);
	}

	.local-guestbook__form label {
		display: grid;
		gap: 0.4rem;
		font-weight: 600;
	}

	.local-guestbook__form input,
	.local-guestbook__form textarea {
		width: 100%;
		border: 1px solid var(--line-color);
		border-radius: 6px;
		padding: 0.65rem 0.75rem;
		background: var(--page-bg);
		color: var(--deep-text);
		font: inherit;
		font-weight: 400;
	}

	.local-guestbook__form textarea {
		min-height: 7rem;
		resize: vertical;
	}

	.local-guestbook__form input:focus-visible,
	.local-guestbook__form textarea:focus-visible,
	.local-guestbook button:focus-visible {
		outline: 2px solid var(--primary);
		outline-offset: 2px;
	}

	.local-guestbook__form-footer,
	.local-guestbook__list-heading,
	.local-guestbook__entry,
	.local-guestbook__entry-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.local-guestbook__count,
	.local-guestbook__error {
		margin: 0;
		font-size: 0.875rem;
	}

	.local-guestbook__count {
		color: var(--btn-content);
		opacity: 0.72;
	}

	.local-guestbook__error {
		color: #b42318;
	}

	.local-guestbook__submit,
	.local-guestbook__delete {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		min-height: 2.5rem;
		border: 1px solid var(--line-color);
		border-radius: 6px;
		background: var(--btn-regular-bg);
		color: var(--deep-text);
		cursor: pointer;
	}

	.local-guestbook__submit {
		padding: 0.5rem 0.8rem;
		font-weight: 600;
	}

	.local-guestbook__submit:hover,
	.local-guestbook__delete:hover {
		background: var(--btn-card-bg-hover);
	}

	.local-guestbook__list {
		display: grid;
		gap: 0.75rem;
	}

	.local-guestbook__list-heading h3 {
		font-size: 1rem;
		font-weight: 700;
	}

	.local-guestbook__list-heading > span {
		min-width: 1.75rem;
		text-align: center;
		color: var(--btn-content);
		font-size: 0.875rem;
	}

	.local-guestbook__empty {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1rem 0;
		color: var(--btn-content);
		opacity: 0.72;
	}

	.local-guestbook__list ul {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.local-guestbook__entry {
		align-items: flex-start;
		padding: 1rem 0;
		border-bottom: 1px solid var(--line-color);
	}

	.local-guestbook__entry-main {
		min-width: 0;
	}

	.local-guestbook__entry-meta {
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.local-guestbook__entry-meta time {
		color: var(--btn-content);
		font-size: 0.8rem;
		opacity: 0.72;
	}

	.local-guestbook__entry p {
		margin-top: 0.4rem;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
	}

	.local-guestbook__delete {
		flex: 0 0 2.5rem;
		width: 2.5rem;
		padding: 0;
		color: #b42318;
	}

	@media (max-width: 640px) {
		.local-guestbook__form {
			padding: 0.8rem;
		}

		.local-guestbook__form-footer {
			align-items: flex-end;
		}
	}
</style>

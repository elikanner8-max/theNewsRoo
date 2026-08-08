import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";

interface SearchResult {
	slug: string;
	title: string;
	dek: string;
	sectionSlug: string;
	sectionLabel: string;
	byline: string;
	location: string;
	publishedAt: string;
	readMinutes: number;
}

interface SearchAppProps {
	articles: SearchResult[];
}

const readInitialKeyword = () =>
	typeof window === "undefined"
		? ""
		: (new URL(window.location.href).searchParams.get("q") ?? "");

const matches = (article: SearchResult, needle: string) =>
	`${article.title} ${article.dek} ${article.sectionLabel} ${article.byline} ${article.location}`
		.toLowerCase()
		.includes(needle);

const SearchApp = ({ articles }: SearchAppProps) => {
	const [keyword, setKeyword] = useState(readInitialKeyword);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current && inputRef.current.value !== keyword) {
			inputRef.current.value = keyword;
		}
	}, [keyword]);

	const results = useMemo(() => {
		const needle = keyword.trim().toLowerCase();
		switch (needle) {
			case "":
				return articles;
			default:
				return articles.filter(article => matches(article, needle));
		}
	}, [articles, keyword]);

	const syncUrl = (next: string) => {
		if (typeof window === "undefined") return;
		const url = new URL(window.location.href);
		switch (next.trim()) {
			case "":
				url.searchParams.delete("q");
				break;
			default:
				url.searchParams.set("q", next);
		}
		window.history.replaceState({}, "", url);
	};

	const onInput = (event: ChangeEvent<HTMLInputElement>) => {
		const next = event.target.value;
		setKeyword(next);
		syncUrl(next);
	};

	return (
		<div>
			<div
				className="field-shell focus-within:field-shell-focus px-4 py-3"
				role="search"
			>
				<svg
					className="text-muted h-5 w-5 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					aria-hidden="true"
				>
					<circle cx="11" cy="11" r="7" />
					<path d="m20 20-3.5-3.5" strokeLinecap="round" />
				</svg>

				<label className="sr-only" htmlFor="searchPageInput">
					Search stories
				</label>
				<input
					id="searchPageInput"
					ref={inputRef}
					className="font-ui placeholder:text-muted w-full min-w-0 bg-transparent text-lg outline-none"
					type="search"
					value={keyword}
					placeholder="Search by headline, section, reporter, or place"
					autoComplete="off"
					onChange={onInput}
				/>

				{keyword && (
					<button
						type="button"
						className="font-ui text-muted hover:text-ink shrink-0 text-sm"
						onClick={() => {
							setKeyword("");
							syncUrl("");
						}}
					>
						Clear
					</button>
				)}
			</div>

			<p className="font-ui text-muted mt-4 text-sm" aria-live="polite">
				{`${results.length} ${results.length === 1 ? "story" : "stories"}${
					keyword.trim() ? ` for “${keyword.trim()}”` : ""
				}`}
			</p>

			{results.length === 0 ? (
				<p className="surface text-ink-soft mt-6">
					No stories matched. Try a shorter term, or browse a section.
				</p>
			) : (
				<ul className="mt-6 flex flex-col">
					{results.map(article => (
						<li
							key={article.slug}
							className="border-t border-line py-5 first:border-t-0 first:pt-0"
						>
							<a
								className="kicker hover:text-accent"
								href={`/topics/${article.sectionSlug}`}
							>
								{article.sectionLabel}
							</a>
							<h2 className="mt-1.5 text-xl font-bold">
								<a
									className="decoration-accent hover:underline"
									href={`/articles/${article.slug}`}
								>
									{article.title}
								</a>
							</h2>
							<p className="text-ink-soft mt-1.5 max-w-prose">
								{article.dek}
							</p>
							<p className="font-ui text-muted mt-2 flex flex-wrap items-center gap-x-2 text-xs">
								<span className="text-ink-soft font-medium">
									{article.byline}
								</span>
								<span aria-hidden="true">·</span>
								<span>{article.location}</span>
								<span aria-hidden="true">·</span>
								<span>{article.readMinutes} min</span>
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchApp;

import { useState } from "preact/hooks";

const SearchApp = () => {
	const [keyword, setKeyword] = useState("");

	return (
		<div class="max-w-xl">
			<label
				class="font-ui mb-1 block text-xs font-bold tracking-[0.08em] text-muted uppercase"
				for="searchKeyword"
			>
				Keyword
			</label>
			<input
				id="searchKeyword"
				type="search"
				class="w-full border border-ink bg-white/60 px-3 py-2"
				value={keyword}
				onInput={event =>
					setKeyword((event.target as HTMLInputElement).value)
				}
			/>
		</div>
	);
};

export default SearchApp;

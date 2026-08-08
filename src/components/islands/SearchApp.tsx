import { useState } from "preact/hooks";

const SearchApp = () => {
	const [keyword, setKeyword] = useState("");

	return (
		<div class="searchApp">
			<div class="field">
				<label for="searchKeyword">Keyword</label>
				<input
					id="searchKeyword"
					type="search"
					value={keyword}
					onInput={event =>
						setKeyword((event.target as HTMLInputElement).value)
					}
				/>
			</div>
		</div>
	);
};

export default SearchApp;

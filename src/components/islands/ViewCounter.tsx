import { useEffect, useState } from "react";
import { formatViews } from "~/lib/format";

interface ViewCounterProps {
	slug: string;
	initialViews: number;
}

const API_BASE = import.meta.env.PUBLIC_API_BASE ?? "http://localhost:3001";

const ViewCounter = ({ slug, initialViews }: ViewCounterProps) => {
	const [views, setViews] = useState(initialViews);

	useEffect(() => {
		let cancelled = false;
		fetch(`${API_BASE}/articles/${slug}/view`, { method: "POST" })
			.then(response => (response.ok ? response.json() : null))
			.then(payload => {
				if (
					!cancelled &&
					payload &&
					typeof payload.views === "number"
				) {
					setViews(payload.views);
				}
			})
			.catch(() => undefined);
		return () => {
			cancelled = true;
		};
	}, [slug]);

	return <span>{formatViews(views)} views</span>;
};

export default ViewCounter;

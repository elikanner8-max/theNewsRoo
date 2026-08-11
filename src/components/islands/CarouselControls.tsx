import { useEffect, useRef, useState } from "react";

interface CarouselControlsProps {
	trackId: string;
}

const ROTATE_INTERVAL_MS = 7000;

const CarouselControls = ({ trackId }: CarouselControlsProps) => {
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);
	const isPausedRef = useRef(false);

	const readTrack = () => document.getElementById(trackId);

	useEffect(() => {
		const track = readTrack();
		if (!track) return;

		const syncEdges = () => {
			setAtStart(track.scrollLeft <= 4);
			setAtEnd(
				track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
			);
		};

		const pause = () => {
			isPausedRef.current = true;
		};
		const resume = () => {
			isPausedRef.current = false;
		};

		syncEdges();
		track.addEventListener("scroll", syncEdges, { passive: true });
		window.addEventListener("resize", syncEdges);
		track.addEventListener("pointerenter", pause);
		track.addEventListener("pointerleave", resume);
		track.addEventListener("focusin", pause);
		track.addEventListener("focusout", resume);

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		const rotate = () => {
			if (isPausedRef.current || document.hidden) return;
			const step = track.firstElementChild
				? track.firstElementChild.getBoundingClientRect().width + 24
				: track.clientWidth * 0.8;
			const reachedEnd =
				track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
			track.scrollTo({
				left: reachedEnd ? 0 : track.scrollLeft + step,
				behavior: "smooth"
			});
		};

		const timer = prefersReducedMotion
			? undefined
			: window.setInterval(rotate, ROTATE_INTERVAL_MS);

		return () => {
			if (timer) window.clearInterval(timer);
			track.removeEventListener("scroll", syncEdges);
			window.removeEventListener("resize", syncEdges);
			track.removeEventListener("pointerenter", pause);
			track.removeEventListener("pointerleave", resume);
			track.removeEventListener("focusin", pause);
			track.removeEventListener("focusout", resume);
		};
	}, [trackId]);

	const scrollByPage = (direction: number) => {
		const track = readTrack();
		if (!track) return;
		track.scrollBy({
			left: direction * track.clientWidth * 0.8,
			behavior: "smooth"
		});
	};

	return (
		<div className="flex gap-2">
			<button
				type="button"
				className="control h-8 w-8 px-0 text-ink-soft transition-colors hover:border-ink hover:text-ink disabled:opacity-30"
				onClick={() => scrollByPage(-1)}
				disabled={atStart}
				aria-label="Previous stories"
			>
				←
			</button>
			<button
				type="button"
				className="control h-8 w-8 px-0 text-ink-soft transition-colors hover:border-ink hover:text-ink disabled:opacity-30"
				onClick={() => scrollByPage(1)}
				disabled={atEnd}
				aria-label="Next stories"
			>
				→
			</button>
		</div>
	);
};

export default CarouselControls;

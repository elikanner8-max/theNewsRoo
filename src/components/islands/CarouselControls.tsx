import { useEffect, useState } from "react";

interface CarouselControlsProps {
	trackId: string;
}

const CarouselControls = ({ trackId }: CarouselControlsProps) => {
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const readTrack = () => document.getElementById(trackId);

	const syncEdges = () => {
		const track = readTrack();
		if (!track) return;
		setAtStart(track.scrollLeft <= 4);
		setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
	};

	useEffect(() => {
		const track = readTrack();
		if (!track) return;
		syncEdges();
		track.addEventListener("scroll", syncEdges, { passive: true });
		window.addEventListener("resize", syncEdges);
		return () => {
			track.removeEventListener("scroll", syncEdges);
			window.removeEventListener("resize", syncEdges);
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
				className="control h-9 w-9 px-0 disabled:opacity-35"
				onClick={() => scrollByPage(-1)}
				disabled={atStart}
				aria-label="Previous stories"
			>
				←
			</button>
			<button
				type="button"
				className="control h-9 w-9 px-0 disabled:opacity-35"
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

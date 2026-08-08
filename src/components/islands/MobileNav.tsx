import { useState } from "preact/hooks";

interface MobileNavProps {
	links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div class="relative md:hidden">
			<button
				type="button"
				class={`button-ui w-[2.95rem] px-0 text-xl ${
					isOpen ? "bg-ink text-bg" : "hover:bg-ink hover:text-bg"
				}`}
				aria-expanded={isOpen}
				aria-controls="mobileNavPanel"
				aria-label={isOpen ? "Close menu" : "Open menu"}
				onClick={() => setIsOpen(wasOpen => !wasOpen)}
			>
				{isOpen ? "×" : "☰"}
			</button>

			{isOpen && (
				<nav
					id="mobileNavPanel"
					class="absolute top-[calc(100%+0.5rem)] left-0 z-40 min-w-60 border border-ink bg-panel shadow-panel"
					aria-label="Sections"
				>
					<ul class="list-none">
						{links.map(link => (
							<li
								key={link.href}
								class="border-t border-line first:border-t-0"
							>
								<a
									class="font-ui block px-4 py-3 text-sm uppercase hover:bg-bg-2"
									href={link.href}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default MobileNav;

import { useState } from "preact/hooks";

interface NavLink {
	href: string;
	label: string;
}

interface MobileNavProps {
	primaryLinks: NavLink[];
	sectionLinks: NavLink[];
}

const MobileNav = ({ primaryLinks, sectionLinks }: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div class="relative md:hidden">
			<button
				type="button"
				class={`pill h-10 w-10 px-0 text-lg ${isOpen ? "pill-active" : ""}`}
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
					class="shadow-panel absolute top-[calc(100%+0.5rem)] left-0 z-40 w-64 rounded-[var(--radius-card)] border border-line bg-surface p-2"
					aria-label="Site"
				>
					<ul class="flex flex-col">
						{primaryLinks.map(link => (
							<li key={link.href}>
								<a
									class="font-ui block rounded-lg px-3 py-2.5 text-sm hover:bg-surface-2"
									href={link.href}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<p class="kicker mt-3 border-t border-line px-3 pt-3">Sections</p>

					<ul class="mt-1 flex flex-col">
						{sectionLinks.map(link => (
							<li key={link.href}>
								<a
									class="font-ui block rounded-lg px-3 py-2.5 text-sm hover:bg-surface-2"
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

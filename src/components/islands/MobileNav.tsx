import { useState } from "react";

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
		<div className="relative md:hidden">
			<button
				type="button"
				className={`control h-9 w-9 px-0 text-lg ${isOpen ? "control-active" : ""}`}
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
					className="shadow-panel absolute top-[calc(100%+0.5rem)] left-0 z-40 w-64 rounded-[var(--radius-control)] border border-line bg-surface p-2"
					aria-label="Site"
				>
					<a
						className="control mb-2 w-full border-ink bg-ink text-bg"
						href="/submit"
					>
						Submit a story
					</a>

					<ul className="flex flex-col">
						{primaryLinks
							.filter(link => link.href !== "/submit")
							.map(link => (
								<li key={link.href}>
									<a
										className="font-ui block rounded-[var(--radius-control)] px-3 py-2.5 text-sm hover:bg-surface-2"
										href={link.href}
									>
										{link.label}
									</a>
								</li>
							))}
					</ul>

					<p className="kicker mt-3 border-t border-line px-3 pt-3">
						Categories
					</p>

					<ul className="mt-1 flex flex-col">
						{sectionLinks.map(link => (
							<li key={link.href}>
								<a
									className="font-ui block rounded-[var(--radius-control)] px-3 py-2.5 text-sm hover:bg-surface-2"
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

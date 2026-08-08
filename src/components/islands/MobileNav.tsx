import { useState } from "preact/hooks";

interface MobileNavProps {
	links: { href: string; label: string }[];
}

const MobileNav = ({ links }: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div class="mobileNav">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls="mobileNavPanel"
				onClick={() => setIsOpen(wasOpen => !wasOpen)}
			>
				{isOpen ? "Close" : "Menu"}
			</button>

			{isOpen && (
				<nav id="mobileNavPanel" aria-label="Primary (mobile)">
					<ul>
						{links.map(link => (
							<li key={link.href}>
								<a href={link.href}>{link.label}</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default MobileNav;

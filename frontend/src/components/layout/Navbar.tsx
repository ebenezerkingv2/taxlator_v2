// =====================================
// src/components/layout/Navbar.tsx
// ===================================== NAVBAR COMPONENT

import TimeDate from "../reusables/TimeDate";
import MobileNavbar from "../reusables/MobileNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import taxlatorLogo from "../../assets/logo/taxlatorLogo.webp";
import { navLinks } from "../../config/navLinks";
import NavLinkStyle from "../ui/links/NavLinkStyle";
import TaxOptionsButton from "../ui/buttons/TaxOptionsButton";

// ===================================== ANIMATION CONFIG
const navbarMotion = {
	initial: { y: -150, opacity: 1 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -100, opacity: 0 },
};

const navbarTransition = {
	duration: 1.5,
	easing: "ease-out",
};

// ===================================== FUNCTION
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={navbarMotion.initial}
			animate={navbarMotion.animate}
			exit={navbarMotion.exit}
			transition={navbarTransition}
			className="navbar__parent w-full min-h-[80px] fixed top-0 left-0 z-50 flex items-center bg-gradient-to-b from-black via-[#000aff] to-black"
		>
			{/* ============================================ NAVBAR CONTENT */}
			<div className="navbar__main w-full max-w-7xl mx-auto h-full text-[#dbcfff] flex justify-between items-end text-[0.5rem] md:text-[1rem] px-4">
				{/* ================ LOGO & TIMEDATE ================ */}
				<div className="logo_timeDate-parent flex items-end gap-2">
					<img
						src={taxlatorLogo}
						alt="Logo"
						className="h-[45px] md:h-[55px] lg:h-[65px] w-auto"
					/>

					<TimeDate className="" />
				</div>

				{/* ================ NAVIGATION LINKS ================ */}
				<div className="navbar__menu flex items-center gap-4">
					<ul className="hidden md:flex gap-[1.5rem]">
						{navLinks.map((link, index) => (
							<li key={index}>
								{/* ================ NORMAL LINKS */}
								{link.type === "link" && link.path && (
									<NavLinkStyle to={link.path}>{link.name}</NavLinkStyle>
								)}

								{/* ================ TAX OPTIONS BUTTON */}
								{link.type === "tax-options" && (
									<TaxOptionsButton>Tax Options</TaxOptionsButton>
								)}
							</li>
						))}
					</ul>

					{/* ================ HAMBURGER MENU FOR SMALL SCREENS ================ */}
					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
						<motion.div
							initial={false}
							animate={{ rotate: isOpen ? 180 : 0 }}
							transition={{ duration: 0.6 }}
						>
							{isOpen ? (
								<FaTimes size={28} className="text-[#f4ab17]" />
							) : (
								<GiHamburgerMenu size={28} className="text-[#dbcfff]" />
							)}
						</motion.div>
					</button>

					<MobileNavbar isOpen={isOpen} toggleMenu={() => setIsOpen(false)} />
				</div>
			</div>
		</motion.nav>
	);
}

export default Navbar;

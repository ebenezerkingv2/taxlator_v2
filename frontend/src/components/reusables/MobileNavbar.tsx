// =====================================
// src/components/reusables/MobileNavbar.tsx
// =====================================

import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../config/navLinks";
import NavLinkStyle from "../ui/links/NavLinkStyle";
import TaxOptionsButton from "../ui/buttons/TaxOptionsButton";

type MobileNavbarProps = {
	isOpen: boolean;
	toggleMenu: () => void;
};

function MobileNavbar({ isOpen, toggleMenu }: MobileNavbarProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.6 }}
					className="absolute top-[80px] right-4 z-40 text-[1.5rem]"
				>
					<div className="relative block w-[15rem] overflow-hidden rounded-2xl bg-gradient-to-b from-black via-[#000aff] to-black py-10 text-center text-[1.2rem]">
						{/* ================= LEFT LINE ================= */}
						<span className="absolute left-0 top-0 h-0 w-[2px] bg-[#f4ab17] transition-all duration-300 h-full shadow-[0_0_20px_4px_#f4ab17]"></span>

						{/* ================= RIGHT LINE ================= */}
						<span className="absolute right-0 bottom-0 h-0 w-[2px] bg-[#01bdfc] transition-all duration-300 h-full shadow-[0_0_20px_4px_#01bdfc]"></span>

						{/* ================= CONTENT ================= */}
						<ul className="flex flex-col items-start gap-4 w-full px-3">
							{navLinks.map((link, index) => (
								<li key={index} className="w-full">
									{link.type === "link" && link.path && (
										<NavLinkStyle to={link.path} onClick={toggleMenu}>
											{link.name}
										</NavLinkStyle>
									)}

									{link.type === "tax-options" && (
										<TaxOptionsButton
											onClick={toggleMenu}
											className="w-full py-2"
										>
											Tax Options
										</TaxOptionsButton>
									)}
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default MobileNavbar;

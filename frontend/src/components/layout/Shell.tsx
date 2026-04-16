// =====================================
// src/components/layout/Shell.tsx
// ===================================== FUNCTION

import type { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TaxOptionsModal from "../modal/TaxOptionsModal";
import TaxModalContext from "../../context/TaxModalContext";

// ===================================== DATA
type ShellProps = {
	children: ReactNode;
};

// ===================================== FUNCTION
export default function Shell({ children }: ShellProps) {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<TaxModalContext.Provider value={{ openModal }}>
			<div className="w-full min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-1 w-full pt-[80px]">{children}</main>
				<Footer />
			</div>

			{/* ===================== TAX OPTIONS MODAL */}
			<TaxOptionsModal
				open={open}
				onClose={closeModal}
				onPick={(type) => {
					closeModal();

					const routes = {
						payePit: "/tax/payePit",
						vat: "/tax/vat",
						freelancer: "/tax/freelancer",
						cit: "/tax/cit",
					};

					navigate(routes[type]);
				}}
			/>
		</TaxModalContext.Provider>
	);
}

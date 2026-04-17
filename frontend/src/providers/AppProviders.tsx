// ===============================
// src/providers/AppProviders.tsx
// =============================== APP PROVIDER COMPONENT

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaxModalContext from "../context/TaxModalContext";
import TaxOptionsModal from "../components/modal/TaxOptionsModal";
import ScrollToTop from "../utils/ScrollToTop";
import AppRoutes from "../routes/AppRoutes";

export default function AppProviders() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<TaxModalContext.Provider value={{ openModal }}>
			<ScrollToTop />
			<AppRoutes />
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

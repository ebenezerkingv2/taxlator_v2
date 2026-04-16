// =====================================
// src/components/modal/TaxOptionsModal.tsx
// ===================================== TAX OPTIONS MODAL COMPONENT

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaxOptionsCard from "../ui/cards/TaxOptionsCard";
import {
	FaUserTie,
	FaReceipt,
	FaLaptopCode,
	FaBuilding,
	FaTimes,
} from "react-icons/fa";
import taxlator from "../../assets/logo/taxlator.webp";

// ===================================== DATA
type TaxModalProps = {
	open: boolean;
	onClose: () => void;
	onPick: (type: "payePit" | "vat" | "freelancer" | "cit") => void;
};

// ===================================== FUNCTION
export default function TaxOptionsModal({
	open,
	onClose,
	onPick,
}: TaxModalProps) {
	useEffect(() => {
		if (!open) return;

		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [open, onClose]);

	return (
		<AnimatePresence>
			{open && (
				<div className="fixed inset-0 z-50">
					{/* ================= BACKDROP ================= */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-black"
						onClick={onClose}
					/>

					{/* ================= MODAL ================= */}
					<div className="absolute inset-0 flex justify-center items-center px-4">
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative w-full max-w-2xl rounded-2xl overflow-hidden 
							bg-gradient-to-b from-black via-[#000aff] to-black p-[2rem]"
						>
							{/* ================= TOP GLOW ================= */}
							<span className="absolute left-0 top-0 w-full h-[2px] bg-[#f4ab17] shadow-[0_0_20px_4px_#f4ab17]" />

							{/* ================= BOTTOM GLOW ================= */}
							<span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#01bdfc] shadow-[0_0_20px_4px_#01bdfc]" />

							{/* ================= HEADER ================= */}
							<div className="px-4 py-2 flex justify-between items-center">
								<img
									src={taxlator}
									alt="Taxlator logo"
									className="w-[13rem] h-auto"
								/>

								<button onClick={onClose}>
									<FaTimes
										size={28}
										className="text-[#f4ab17] cursor-pointer"
									/>
								</button>
							</div>

							{/* ================= TITLE ================= */}
							<p className="text-center text-md text-[#01bdfc]">
								Choose a category
							</p>

							{/* ================= OPTIONS ================= */}
							<div className="p-4 grid sm:grid-cols-2 gap-3">
								<TaxOptionsCard
									title="PAYE / PIT"
									desc="Personal Income Tax"
									icon={<FaUserTie />}
									onClick={() => {
										onClose();
										onPick("payePit");
									}}
								/>

								<TaxOptionsCard
									title="VAT"
									desc="Value Added Tax"
									icon={<FaReceipt />}
									onClick={() => {
										onClose();
										onPick("vat");
									}}
								/>

								<TaxOptionsCard
									title="Freelancer"
									desc="Self-Employed Tax"
									icon={<FaLaptopCode />}
									onClick={() => {
										onClose();
										onPick("freelancer");
									}}
								/>

								<TaxOptionsCard
									title="Company Income Tax"
									desc="Corporate Tax"
									icon={<FaBuilding />}
									onClick={() => {
										onClose();
										onPick("cit");
									}}
								/>
							</div>
						</motion.div>
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}

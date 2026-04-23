// =====================================
// src/dashboard/dashPages/History.tsx
// ===================================== HISTORY PAGE COMPONENT

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardPageFrame from "../dashComponents/frames/DashBoardPageFrame";

import HistoryCard from "../dashComponents/cards/HistoryCard";
import { useHistory } from "../dashHooks/useHistory";
import type { TaxType } from "../types";
import TaxTypeBadgeButton from "../../ui/buttons/TaxTypeBadgeButton";

// ===================================== DATA
type HistoryFilterType = "ALL" | TaxType;

// ===================================== FUNCTION
export default function HistoryPage() {
	const { history, loading, filter, setFilter } = useHistory();
	const [showContent, setShowContent] = useState(false);

	const filters: HistoryFilterType[] = [
		"ALL",
		"PAYE / PIT",
		"VAT",
		"CIT",
		"FREELANCER",
	];

	// ================= MINIMUM LOADING DELAY =================
	useEffect(() => {
		if (!loading) {
			const timer = setTimeout(() => {
				setShowContent(true);
			}, 800); // 👈 adjust feel here (600–1200ms sweet spot)

			return () => clearTimeout(timer);
		}
	}, [loading]);

	return (
		<DashboardPageFrame className="flex flex-col space-y-6 text-[#dbcfff]">
			{/* ================= HEADER ================= */}
			<div>
				<h1 className="text-xl font-bold text-[#f4ab17]">
					Calculation History
				</h1>
				<p className="text-sm text-[#dbcfff]/70">
					View all your past tax calculations
				</p>
			</div>

			{/* ================= FILTER ================= */}
			<div className="w-full max-w-6xl md:max-w-3xl  mx-auto py-3 flex justify-evenly gap-4 flex-wrap">
				{filters.map((type) => {
					return (
						<motion.button
							key={type}
							onClick={() => setFilter(type)}
							whileTap={{ scale: 0.9 }}
							transition={{ type: "spring", stiffness: 150, damping: 12 }}
							className="cursor-pointer"
						>
							<TaxTypeBadgeButton type={type} isActive={filter === type} />
						</motion.button>
					);
				})}
			</div>

			{/* ================= LIST ================= */}
			<AnimatePresence mode="wait">
				<motion.div
					key="history-list"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: {
							delay: 0.5,
							duration: 2.5,
							ease: [0.4, 0, 0.2, 1],
						},
					}}
					className="space-y-4 text-[#dbcfff]/90 text-center"
				>
					{!showContent ? (
						<p>Loading history...</p>
					) : history.length === 0 ? (
						<p>No history found</p>
					) : (
						history.map((item) => <HistoryCard key={item.id} item={item} />)
					)}
				</motion.div>
			</AnimatePresence>
		</DashboardPageFrame>
	);
}

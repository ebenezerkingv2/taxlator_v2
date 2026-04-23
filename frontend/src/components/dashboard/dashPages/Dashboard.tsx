// =====================================
// src/dashboard/dashPages/Dashboard.tsx
// ===================================== DASHBOARD COMPONENT

import DashboardPageFrame from "../dashComponents/frames/DashBoardPageFrame";
import CardFrame from "../../ui/frames/CardFrame";
import TaxOptionsButton from "../../ui/buttons/TaxOptionsButton";

// ===================================== FUNCTION
export default function Dashboard() {
	return (
		<DashboardPageFrame className="space-y-6">
			{/* ================= GREETING ================= */}
			<div>
				<h1 className="text-xl font-bold text-[#f4ab17]">Overview</h1>
				<p className="text-sm text-[#dbcfff]/70">Here’s your tax summary</p>
			</div>

			{/* ================= STATS ================= */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<CardFrame className="p-4">
					<h3 className="text-lg font-bold text-[#f4ab17] mb-2">
						Estimated Tax
					</h3>
					<h6 className="text-lg text-[#01bdfc] font-bold">₦120,000</h6>
				</CardFrame>

				<CardFrame className="p-4">
					<h3 className="text-lg font-bold text-[#f4ab17] mb-2">
						Last Calculation
					</h3>
					<h6 className="text-lg text-[#01bdfc] font-bold">PAYE - March</h6>
				</CardFrame>

				<CardFrame className="p-4">
					<h3 className="text-lg font-bold text-[#f4ab17] mb-2">
						Next Deadline
					</h3>
					<h6 className="text-lg text-[#01bdfc] font-bold">30 April</h6>
				</CardFrame>
			</div>

			{/* ================= CTA ================= */}
			<CardFrame className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
				<div>
					<h3 className="text-lg font-bold text-[#f4ab17] mb-2">
						Start a new calculation
					</h3>
					<p className="text-sm text-[#dbcfff]/90">
						Calculate your PAYE, FREELANCER, VAT, or CIT in seconds
					</p>
				</div>
				{/* ================= TAX OPTIONS BUTTON ================= */}
				<TaxOptionsButton className="p-2">Tax Options</TaxOptionsButton>
			</CardFrame>

			{/* ================= RECENT ================= */}
			<CardFrame className="p-4">
				<h3 className="text-lg font-bold text-[#f4ab17] mb-2">
					Recent Calculations
				</h3>

				<div className="space-y-2 text-sm text-[#dbcfff]/90">
					<div className="flex justify-between">
						<span>PAYE - March</span>
						<span>₦85,000</span>
					</div>

					<div className="flex justify-between">
						<span>VAT - Feb</span>
						<span>₦45,000</span>
					</div>

					<div className="flex justify-between">
						<span>CIT - Q1</span>
						<span>₦210,000</span>
					</div>
				</div>
			</CardFrame>

			{/* ================= TIPS ================= */}
			<CardFrame className="p-4">
				<h3 className="text-[#f4ab17] font-semibold mb-2">Tax Tips</h3>

				<p className="text-sm text-[#dbcfff]/90">
					Remember to file your taxes before the deadline to avoid penalties.
					Stay compliant with FIRS regulations.
				</p>
			</CardFrame>
		</DashboardPageFrame>
	);
}

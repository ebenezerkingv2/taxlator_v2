// =====================================
// src/dashboard/pages/Dashboard.tsx
// ===================================== DASHBOARD COMPONENT

import CardFrame from "../../ui/frames/CardFrame";
import TaxOptionsButton from "../../ui/buttons/TaxOptionsButton";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	// const navigate = useNavigate();

	return (
		<div className="space-y-6">
			{/* ================= GREETING ================= */}
			<div>
				<h1 className="text-2xl font-bold text-[#f4ab17]">Welcome back 👋</h1>
				<p className="text-sm text-[#dbcfff]/80">Here’s your tax summary</p>
			</div>

			{/* ================= STATS ================= */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<CardFrame className="p-4">
					<p className="text-sm text-[#dbcfff]/70">Estimated Tax</p>
					<h2 className="text-xl text-[#01bdfc] font-bold">₦120,000</h2>
				</CardFrame>

				<CardFrame className="p-4">
					<p className="text-sm text-[#dbcfff]/70">Last Calculation</p>
					<h2 className="text-xl text-[#01bdfc] font-bold">PAYE - March</h2>
				</CardFrame>

				<CardFrame className="p-4">
					<p className="text-sm text-[#dbcfff]/70">Next Deadline</p>
					<h2 className="text-xl text-[#01bdfc] font-bold">30 April</h2>
				</CardFrame>
			</div>

			{/* ================= CTA ================= */}
			<CardFrame className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
				<div>
					<h2 className="text-[#f4ab17] font-semibold">
						Start a new calculation
					</h2>
					<p className="text-sm text-[#dbcfff]/80">
						Calculate your PAYE, FREELANCER, VAT, or CIT in seconds
					</p>
				</div>

				<TaxOptionsButton className="p-2">Tax Options</TaxOptionsButton>
			</CardFrame>

			{/* ================= RECENT ================= */}
			<CardFrame className="p-6">
				<h2 className="text-[#f4ab17] font-semibold mb-4">
					Recent Calculations
				</h2>

				<div className="space-y-3 text-sm text-[#dbcfff]/90">
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
			<CardFrame className="p-6">
				<h2 className="text-[#f4ab17] font-semibold mb-2">Tax Tips</h2>

				<p className="text-sm text-[#dbcfff]/80">
					Remember to file your taxes before the deadline to avoid penalties.
					Stay compliant with FIRS regulations.
				</p>
			</CardFrame>
		</div>
	);
}

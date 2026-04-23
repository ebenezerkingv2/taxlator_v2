// =====================================
// src/dashboard/dashPages/Profile.tsx
// ===================================== PROFILE PAGE

import DashboardPageFrame from "../dashComponents/frames/DashBoardPageFrame";
import CardFrame from "../../ui/frames/CardFrame";

import ProfileImageUploader from "../dashComponents/ProfileImageUploader";

import { useUser } from "../../../context/useUser";

// ===================================== FUNCTION
export default function Profile() {
	const { user } = useUser();

	return (
		<DashboardPageFrame className="space-y-6 text-[#dbcfff]">
			<div>
				<h1 className="text-xl font-bold text-[#f4ab17]">Profile</h1>
				<p className="text-sm text-[#dbcfff]/70">
					Track all your past tax calculations
				</p>
			</div>

			{/* =============================== DATA STATS */}
			<CardFrame className="p-4 rounded-xl">
				<ProfileImageUploader />
				<div className="mt-5 space-y-2 text-sm md:text-lg">
					<p>
						<span className="text-[#f4ab17]">Name:</span> {user.name}
					</p>

					<p>
						<span className="text-[#f4ab17]">Email:</span> {user.email}
					</p>

					<p>
						<span className="text-[#f4ab17]">Member since:</span>{" "}
						{user.memberSince}
					</p>
				</div>
			</CardFrame>

			{/* =============================== DATA  */}
			<CardFrame className="p-4 rounded-xl flex flex-col gap-8 md:flex-row justify-between">
				{/* =============================== USAGE STATS */}
				<div className="usage_stats space-y-2 text-sm">
					<h2 className="text-lg font-bold text-[#F1FF5E]">Usage Stats</h2>
					<p>Total Calculations: 24</p>
					<p>Most used: VAT</p>
					<p>Last activity: Today</p>
				</div>

				{/* =============================== TAX PREFERENCES */}
				<div className="tax_preferences space-y-2 text-sm">
					<h2 className="text-lg font-bold text-[#6FCF97]">Tax Preferences</h2>
					<p>
						<span className="text-white/60">Default Tax:</span> VAT
					</p>
					<p>
						<span className="text-white/60">Currency:</span> ₦ NGN
					</p>
					<p>
						<span className="text-white/60">Profile Type:</span> Individual
					</p>
				</div>

				{/* =============================== RECENT ACTIVITY */}
				<div className="recent_activity space-y-2 text-sm">
					<h2 className="md:text-lg font-bold text-[#FF3737]">
						Recent Activity
					</h2>
					<p>VAT → ₦120,000 → Apr 22</p>
					<p>PIT → ₦45,000 → Apr 20</p>
					<p>CIT → ₦300,000 → Apr 18</p>
				</div>
			</CardFrame>
		</DashboardPageFrame>
	);
}

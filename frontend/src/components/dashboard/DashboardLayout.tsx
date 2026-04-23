// =====================================
// src/dashboard/DashboardLayout.tsx
// ===================================== DASHBOARD LAYOUT COMPONENT

import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import HeroFrame from "../ui/frames/HeroFrame";
import DashboradOutletFrame from "./dashComponents/frames/DashboardOutletFrame";

import Sidebar from "./dashComponents/Sidebar";
import Topbar from "./dashComponents/Topbar";

import { MdDashboard, MdCalculate, MdPerson } from "react-icons/md";

// ===================================== FUNCTION
export default function DashboardLayout() {
	const [collapsed, setCollapsed] = useState(true);
	const [heroDone, setHeroDone] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{ name: "Overview", icon: MdDashboard, path: "/dashboard" },
		{
			name: "Calculations History",
			icon: MdCalculate,
			path: "/dashboard/calculations",
		},
		{ name: "Profile", icon: MdPerson, path: "/dashboard/profile" },
	];

	return (
		<HeroFrame
			onAnimationComplete={() => setHeroDone(true)}
			className="flex w-full min-h-screen bg-gradient-to-b from-black via-[#000aff] to-black"
		>
			<div className="flex w-full min-h-screen">
				{/* ================= SIDEBAR ================= */}
				<Sidebar
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					location={location}
					navigate={navigate}
					navItems={navItems}
				/>

				{/* ================= MAIN ================= */}
				<div className="flex-1 ml-[5rem] pr-4 md:ml-0 md:px-4 flex flex-col min-h-screen transition-all duration-400">
					<Topbar />

					<main>
						<DashboradOutletFrame
							startAnimation={heroDone}
							className="flex-1 my-8 md:max-w-5xl mx-auto"
						>
							<Outlet />
						</DashboradOutletFrame>
					</main>
				</div>
			</div>
		</HeroFrame>
	);
}

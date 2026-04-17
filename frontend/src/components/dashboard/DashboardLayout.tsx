// =====================================
// src/dashboard/DashboardLayout.tsx
// ===================================== DASHBOARD LAYOUT COMPONENT

import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdDashboard, MdCalculate, MdPerson, MdLogout } from "react-icons/md";

import taxlator from "../../assets/logo/taxlator.webp";

export default function DashboardLayout() {
	const [collapsed, setCollapsed] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const navItems = [
		{ name: "Overview", icon: MdDashboard, path: "/dashboard" },
		{
			name: "Calculations",
			icon: MdCalculate,
			path: "/dashboard/calculations",
		},
		{ name: "Profile", icon: MdPerson, path: "/dashboard/profile" },
	];

	return (
		<div className="flex w-full min-h-screen bg-gradient-to-b from-black via-[#000aff] to-black">
			{/* ================= SIDEBAR ================= */}
			<motion.aside
				initial={{ x: -30, opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
					width: collapsed ? 80 : 250,
				}}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="bg-gradient-to-b from-black via-[#f4ab17] to-black border-r-8 border-[#f4ab17]/20 h-screen fixed md:relative z-40 backdrop-blur-md flex flex-col"
			>
				{/* ================= HEADER ================= */}
				<div className="h-[80px] bg-black px-4 border-b-8 border-[#f4ab17]/20 flex justify-between items-center shrink-0">
					<motion.div
						animate={{
							opacity: collapsed ? 0 : 1,
							scale: collapsed ? 0.8 : 1,
						}}
						transition={{ duration: 0.4 }}
						className="overflow-hidden"
					>
						<img
							src={taxlator}
							alt="Taxlator logo"
							className="w-[8rem] h-auto block"
						/>
					</motion.div>

					<button
						onClick={() => setCollapsed(!collapsed)}
						className="text-[#dbcfff] flex-shrink-0 cursor-pointer"
					>
						<motion.div
							initial={false}
							animate={{ rotate: collapsed ? 180 : 0 }}
							transition={{ duration: 0.4 }}
						>
							{collapsed ? (
								<GiHamburgerMenu size={28} className="text-[#f4ab17]" />
							) : (
								<FaTimes size={28} className="text-[#f4ab17]" />
							)}
						</motion.div>
					</button>
				</div>

				{/* ================= NAV AREA ================= */}
				<div className="flex flex-col flex-1">
					<motion.nav className="p-4 space-y-4 text-sm text-[#dbcfff]">
						{navItems.map((item) => {
							const Icon = item.icon;

							const isActive =
								location.pathname === item.path ||
								location.pathname.startsWith(item.path + "/");

							return (
								<button
									key={item.name}
									onClick={() => navigate(item.path)}
									className={`w-full flex items-center gap-3 relative px-2 py-2 rounded-lg transition cursor-pointer
									${isActive ? "text-[#01bdfc]" : "text-[#dbcfff]"}`}
								>
									{/* ================= ACTIVE INDICATOR ================= */}
									{isActive && (
										<motion.span
											layoutId="activeIndicator"
											className="absolute left-0 top-0 h-full w-[4px] bg-[#01bdfc] shadow-[0_0_12px_2px_#01bdfc] rounded-r-full"
										/>
									)}

									{/* ================= ICON ================= */}
									<span className="w-[28px] h-[28px] flex items-center justify-center shrink-0">
										<Icon size={24} />
									</span>

									{/* ================= TEXT ================= */}
									<motion.span
										initial={false}
										animate={{
											opacity: collapsed ? 0 : 1,
											scale: collapsed ? 0.85 : 1,
											x: collapsed ? -8 : 0,
										}}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="whitespace-nowrap overflow-hidden"
									>
										{item.name}
									</motion.span>
								</button>
							);
						})}
					</motion.nav>

					{/* ================= SIGN OUT ================= */}
					<div className="p-4 mt-auto">
						<button
							onClick={() => navigate("/login-page")}
							className="w-full flex items-center gap-3 px-2 py-2 rounded-lg
							text-[#dbcfff] hover:text-red-400 transition cursor-pointer"
						>
							<span className="w-[28px] h-[28px] flex items-center justify-center shrink-0">
								<MdLogout size={24} />
							</span>

							<motion.span
								initial={false}
								animate={{
									opacity: collapsed ? 0 : 1,
									scale: collapsed ? 0.85 : 1,
									x: collapsed ? -8 : 0,
								}}
								transition={{ duration: 0.3 }}
								className="whitespace-nowrap overflow-hidden"
							>
								Sign Out
							</motion.span>
						</button>
					</div>
				</div>
			</motion.aside>

			{/* ================= MAIN ================= */}
			<div
				className={`flex-1 flex flex-col min-h-screen transition-all
				${collapsed ? "md:ml-[80px]" : "md:ml-[250px]"}`}
			>
				{/* ================= TOPBAR ================= */}
				<header className="h-[80px] bg-black px-4 border-b-8 border-[#f4ab17]/20 flex items-center justify-between px-6">
					<h2 className="font-semibold text-[#f4ab17]">Dashboard</h2>

					<div className="text-sm text-[#dbcfff]/80">Welcome back 👋</div>
				</header>

				{/* ================= CONTENT ================= */}
				<main className="flex-1 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

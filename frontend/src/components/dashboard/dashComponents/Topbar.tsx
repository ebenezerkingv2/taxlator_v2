// =====================================
// src/components/dashboard/dashComponents/Topbar.tsx
// ===================================== DASHBOARD TOPBAR COMPONENT

import TimeDate from "../../reusables/TimeDate";
import { useUser } from "../../../context/useUser";

// ===================================== FUNCTION
export default function Topbar() {
	const { user } = useUser();

	return (
		<header className="topbar_parent h-[80px] bg-black border-b-8 border-[#f4ab17]/20 flex items-center justify-end md:justify-between px-2 border">
			{/* =================== TIME & DATE */}
			<TimeDate className="hidden md:block text-sm text-[#f4ab17]" />

			<div className="topBar_userProfile flex items-center gap-2">
				{/* =================== USER NAME */}
				<h1 className="relative text-sm text-[#f4ab17] font-bold px-2">
					{user.name}

					<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-[120%] bg-[#01bdfc] shadow-[0_0_12px_#01bdfc] rounded-full" />
				</h1>

				{/* =================== USER PROFILE IMAGE */}
				<img
					src={
						user.image ||
						"https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
					}
					alt="Profile"
					className="w-12 h-12 md:w-14 md:h-14 object-cover border-2 border-[#01bdfc] rounded-full"
				/>
			</div>
		</header>
	);
}

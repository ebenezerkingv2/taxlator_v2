// =====================================
// src/components/ui/frames/CardFrame.tsx
// ===================================== CARD FRAME COMPONENT

import type { ReactNode } from "react";
import { motion } from "framer-motion";

// ===================================== DATA
type CardFrameProps = {
	children: ReactNode;
	className?: string;
	animate?: boolean;
};

// ===================================== FUNCTION
export default function CardFrame({
	children,
	className = "",
	animate = false,
}: CardFrameProps) {
	const Component = animate ? motion.div : "div";

	return (
		<Component
			initial={animate ? { opacity: 0, scale: 1 } : undefined}
			whileInView={animate ? { opacity: 1 } : undefined}
			whileHover={animate ? { scale: 0.97 } : undefined}
			transition={animate ? { duration: 0.4, ease: "easeOut" } : undefined}
			viewport={animate ? { amount: 0.2, once: false } : undefined}
			className={`relative z-10 overflow-hidden rounded-2xl bg-gradient-to-b from-black via-[#000aff] to-black group/card ${className}`}
		>
			{/* ================= LEFT LINE ================= */}
			<span className="absolute left-0 top-0 h-full w-[2px] bg-[#f4ab17] shadow-[0_0_20px_4px_#f4ab17]" />

			{/* ================= RIGHT LINE ================= */}
			<span className="absolute right-0 bottom-0 h-0 w-[2px] transition-all duration-300 group-hover/card:h-full bg-[#01bdfc] shadow-[0_0_20px_4px_#01bdfc]" />

			{children}
		</Component>
	);
}

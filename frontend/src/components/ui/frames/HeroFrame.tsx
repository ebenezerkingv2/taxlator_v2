// =====================================
// src/pages/components/ui/frames/heroFrame.tsx
// ===================================== HERO FRAME COMPONENT

import type { ReactNode } from "react";
import { motion } from "framer-motion";

// ===================================== DATA
type HeroFrameProps = {
	id?: string;
	children: ReactNode;
	className?: string;
};

// ===================================== FUNCTION

export default function HeroFrame({ id, children, className = "" }: HeroFrameProps) {
	return (
		<motion.div
			id={id}
			initial={{ scale: 1.1, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1.5, ease: "easeOut" }}
			className={`w-full ${className}`}
		>
			{children}
		</motion.div>
	);
}

// =====================================
// src/components/dashboard/dashComponents/TaxBadge.tsx
// ===================================== TAX BADGE COMPONENT

import type { TaxType } from "../types";
import { taxTypeConfig, type TaxVariant } from "../taxType.config";

// ===================================== DATA
type TaxBadgeProps = {
	type: TaxType | "ALL";
	className?: string;
};

const variantStyles: Record<TaxVariant, string> = {
	PIT: "text-[#FFF6F6]",
	VAT: "text-[#F1FF5E]",
	CIT: "text-[#6FCF97]",
	FREELANCER: "text-[#FF3737]",
	ALL: "text-[#01bdfc]",
};

// ===================================== FUNCTION
export default function TaxBadge({ type, className = "" }: TaxBadgeProps) {
	const config = taxTypeConfig[type];

	return (
		<span
			className={`
				inline-flex items-center
				px-2 py-1
				text-xs font-bold
				bg-black
				rounded-md
				${variantStyles[config.variant]}
				${className}
			`}
		>
			{config.label}
		</span>
	);
}

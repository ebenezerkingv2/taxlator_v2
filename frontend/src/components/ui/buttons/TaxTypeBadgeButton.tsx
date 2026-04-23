// =====================================
// src/components/ui/buttons/TaxTypeBadgeButton.tsx
// ===================================== TAX TYPE BADGE (PRESENTATIONAL)

import type { TaxType } from "../../dashboard/types";
import type { CSSProperties } from "react";
import { taxTypeConfig, type TaxVariant } from "../../dashboard/taxType.config";

// ===================================== DATA

type TaxTypeBadgeButtonProps = {
	type: TaxType | "ALL";
	isActive?: boolean;
	className?: string;
};

const variantColor: Record<TaxVariant, string> = {
	ALL: "#01bdfc",
	PIT: "#FFF6F6",
	VAT: "#F1FF5E",
	CIT: "#6FCF97",
	FREELANCER: "#FF3737",
};

type CustomStyle = CSSProperties & {
	"--clr"?: string;
};

// ===================================== FUNCTION
export default function TaxTypeBadgeButton({
	type,
	isActive = false,
	className = "",
}: TaxTypeBadgeButtonProps) {
	const config = taxTypeConfig[type];
	const color = variantColor[config.variant];

	const style: CustomStyle = {
		"--clr": color,
	};

	return (
		<div
			style={style}
			className={`px-6 py-2 rounded-[0.5rem] text-sm font-bold relative transition-all duration-400 text-[var(--clr)] ${className}`}
		>
			{config.label}

			{/* ================= BOTTOM GLOW INDICATOR ================= */}
			<span
				className={`absolute left-0 bottom-0 h-[4px] rounded-full transition-all duration-400 ease-out ${
					isActive ? "w-full opacity-100" : "w-0 opacity-0"
				} bg-[var(--clr)] shadow-[0_0_12px_var(--clr)]`}
			/>
		</div>
	);
}

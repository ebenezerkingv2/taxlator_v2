// ====================================
// src/components/ui/buttons/CompanySizeSelect.tsx
// ==================================== COMPANY SIZE SELECT BUTTON COMPONENT

import { useState } from "react";

// ==================================== DATA
export type CompanySize = "Small" | "Other" | "Multinational";

const COMPANY_SIZE_OPTIONS: {
	value: CompanySize;
	label: string;
}[] = [
	{
		value: "Small",
		label: "Small Company (0%)",
	},
	{
		value: "Other",
		label: "Other Companies (30%)",
	},
	{
		value: "Multinational",
		label: "Multinational Company (30% vs 15% Min. Tax)",
	},
];

// ==================================== DATA
type CompanySizeSelectProps = {
	value: CompanySize | "";
	onChange: (value: CompanySize) => void;
	containerClassName?: string;
};

// ==================================== FUNCTION
export default function CompanySizeSelect({
	value,
	onChange,
	containerClassName = "",
}: CompanySizeSelectProps) {
	const [open, setOpen] = useState(false);

	const selectedLabel = value
		? COMPANY_SIZE_OPTIONS.find((o) => o.value === value)?.label
		: "Select Company Size";

	return (
		<div className={`mt-5 rounded-xl bg-black p-4 ${containerClassName}`}>
			{/* ================= HEADER  */}
			<div className="mb-3">
				<div className="text-sm text-[#dbcfff]/90">Company Size</div>
				<div className="text-xs text-[#dbcfff]/70 mt-1 mb-3">
					Tax rate will be applied automatically
				</div>
			</div>

			{/* ============================ TRIGGER ============================ */}
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="relative w-full flex items-center justify-between rounded-lg px-3 py-3 text-sm bg-gradient-to-b from-black via-[#000aff] to-black cursor-pointer"
			>
				<span>{selectedLabel}</span>
				<span className="text-[#01bdfc] text-lg">{open ? "▴" : "▾"}</span>
			</button>

			{/* ============================ OPTIONS ============================ */}
			{open && (
				<div className="mt-3 rounded-lg overflow-hidden bg-black">
					{COMPANY_SIZE_OPTIONS.map((option) => (
						<button
							key={option.value}
							type="button"
							onClick={() => {
								onChange(option.value);
								setOpen(false);
							}}
							className="w-full text-left px-3 py-3 text-xs border-b border-[#01bdfc]/20 last:border-b-0 hover:bg-[#000aff]/50 transition cursor-pointer"
						>
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

// ====================================
// src/pages/taxPages/CIT.tsx
// ====================================

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TaxOptionsButton from "../../components/ui/buttons/TaxOptionsButton";
import CalculateTaxButton from "../../components/ui/buttons/CalculateTaxButton";
import CurrencyInput from "../../components/ui/inputs/CurrencyInput";
import { parseNumber } from "../../utils/numberInput";
import CompanySizeSelect from "../../components/ui/buttons/CompanySizeSelect";
import TaxFrame from "../../components/ui/frames/TaxFrame";

// ==================================== FUNCTION
export default function CIT() {
	// ================= STATE
	const [annualTurnover, setAnnualTurnover] = useState("");
	const [fixedAssets, setFixedAssets] = useState("");
	const [taxableProfit, setTaxableProfit] = useState("");
	const [companySize, setCompanySize] = useState<
		"" | "Small" | "Other" | "Multinational"
	>("");
	const [accountingProfit, setAccountingProfit] = useState("");

	// ================= DERIVED NUMBERS
	const annualTurnoverNum = useMemo(
		() => parseNumber(annualTurnover),
		[annualTurnover],
	);
	const fixedAssetsNum = useMemo(() => parseNumber(fixedAssets), [fixedAssets]);
	const taxableProfitNum = useMemo(
		() => parseNumber(taxableProfit),
		[taxableProfit],
	);
	const accountingProfitNum = useMemo(
		() => parseNumber(accountingProfit),
		[accountingProfit],
	);

	// ================= VALIDATION (same thinking as new version)
	const isValid =
		annualTurnoverNum > 0 &&
		fixedAssetsNum > 0 &&
		taxableProfitNum > 0 &&
		companySize !== "" &&
		(companySize !== "Multinational" || accountingProfitNum > 0);

	// ================= SIMPLE LIVE CALC (ALIGNED WITH BACKEND LOGIC)
	const result = useMemo(() => {
		let taxRate = 0;

		if (companySize === "Small") taxRate = 0;
		else if (companySize === "Other") taxRate = 0.3;
		else if (companySize === "Multinational") taxRate = 0.3;

		const baseProfit =
			companySize === "Multinational" ? accountingProfitNum : taxableProfitNum;

		// simple minimum tax logic (placeholder)
		const minimumTax = annualTurnoverNum * 0.005;

		const calculatedTax = baseProfit * taxRate;

		const estimatedTax =
			companySize === "Multinational"
				? Math.max(calculatedTax, minimumTax)
				: calculatedTax;

		return {
			baseProfit,
			taxRate,
			minimumTax,
			estimatedTax,
		};
	}, [taxableProfitNum, accountingProfitNum, annualTurnoverNum, companySize]);

	// ================= HANDLER
	const handleCalculate = () => {
		console.log("Calculation Result:", result);
	};

	return (
		<TaxFrame>
			{/* ================= HEADER TAX OPTIONS BUTTON ================= */}
			<div className="text-[1.2rem] md:text-[1.5rem] flex justify-center py-1">
				<TaxOptionsButton className="px-[2rem] py-[0.3rem]">
					Tax Options
				</TaxOptionsButton>
			</div>

			{/* ================= MAIN GRID ================= */}
			<div className="grid lg:grid-cols-2 gap-6">
				{/* ================= LEFT (TAX CALCULATOR FORM) ======================= */}
				<div className="relative rounded-2xl p-6 bg-gradient-to-b from-black via-[#000aff] to-black">
					{/* ================= HEADER  */}
					<div className="flex flex-col items-center text-[#01bdfc] mb-6">
						<h2 className="text-xl font-semibold">Company Income Tax</h2>
						<p className="text-xs text-[#dbcfff]/90">Corporate tax</p>
					</div>

					{/* ================= FORM  */}
					<div className="space-y-2">
						<CurrencyInput
							id="turnover"
							label="Annual Turnover"
							value={annualTurnover}
							onChange={setAnnualTurnover}
						/>

						<CurrencyInput
							id="assets"
							label="Fixed Assets"
							value={fixedAssets}
							onChange={setFixedAssets}
						/>

						<CurrencyInput
							id="profit"
							label="Taxable Profit"
							value={taxableProfit}
							onChange={setTaxableProfit}
						/>

						<CompanySizeSelect value={companySize} onChange={setCompanySize} />

						{companySize === "Multinational" && (
							<CurrencyInput
								id="accountingProfit"
								label="Accounting Profit"
								value={accountingProfit}
								onChange={setAccountingProfit}
							/>
						)}

						{/* ================= CALCULATE BUTTON ================= */}
						<CalculateTaxButton
							onClick={handleCalculate}
							enabled={isValid}
							loading={false}
						/>
					</div>
				</div>

				{/* ================= RIGHT (RESULTS) ================= */}
				<motion.div className="relative rounded-2xl p-6 bg-black">
					<h3 className="text-lg font-semibold mb-6">Live Result</h3>

					<div className="space-y-4 text-sm">
						<ResultRow label="Base Profit" value={result.baseProfit} />
						<ResultRow label="Tax Rate (%)" value={result.taxRate * 100} />
						<ResultRow label="Minimum Tax" value={result.minimumTax} />

						<hr className="border-[#01bdfc]" />

						<ResultRow
							label="Estimated Tax"
							value={result.estimatedTax}
							highlight
							big
						/>
					</div>
				</motion.div>
			</div>
		</TaxFrame>
	);
}

// ==================================== RESULT ROW COMPONENT
function ResultRow({
	label,
	value,
	highlight,
	big,
}: {
	label: string;
	value: number;
	highlight?: boolean;
	big?: boolean;
}) {
	return (
		<div className="flex justify-between items-center">
			<span className="text-gray-400">{label}</span>
			<span
				className={`${
					highlight ? "text-[#f4ab17]" : "text-white"
				} ${big ? "text-lg font-semibold" : ""}`}
			>
				₦{value.toLocaleString()}
			</span>
		</div>
	);
}

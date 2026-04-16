// ====================================
// src/pages/taxPages/PayePit.tsx
// ==================================== PAYE / PIT TAX CALCULATION/RESULT LAYOUT

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TaxOptionsButton from "../../components/ui/buttons/TaxOptionsButton";
import CalculateTaxButton from "../../components/ui/buttons/CalculateTaxButton";
import CurrencyInput from "../../components/ui/inputs/CurrencyInput";
import { parseNumber } from "../../utils/numberInput";
import TaxFrame from "../../components/ui/frames/TaxFrame";

// ==================================== FUNCTION
export default function PayePit() {
	// ================= STATE
	const [income, setIncome] = useState("");
	const [rent, setRent] = useState("");
	const [other, setOther] = useState("");
	const [nhis, setNhis] = useState(false);
	const [nhf, setNhf] = useState(false);

	// ================= VALIDATION
	const isValid = parseNumber(income) > 0;

	// ================= SIMPLE LIVE CALC (TEMP LOGIC)
	const result = useMemo(() => {
		const incomeNum = parseNumber(income);
		const rentNum = parseNumber(rent);
		const otherNum = parseNumber(other);

		const pension = incomeNum * 0.08;
		const nhisDeduction = nhis ? incomeNum * 0.05 : 0;
		const nhfDeduction = nhf ? incomeNum * 0.025 : 0;
		const rentRelief = rentNum * 0.2;

		const totalDeductions =
			pension + nhisDeduction + nhfDeduction + rentRelief + otherNum;

		const taxableIncome = Math.max(incomeNum - totalDeductions, 0);
		const estimatedTax = taxableIncome * 0.1; // placeholder

		return {
			pension,
			nhisDeduction,
			nhfDeduction,
			rentRelief,
			totalDeductions,
			taxableIncome,
			estimatedTax,
		};
	}, [income, rent, other, nhis, nhf]);

	// ================= HANDLER (for now just logs result)
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
						<h2 className="text-xl font-semibold">PAYE / PIT</h2>
						<p className="text-xs text-[#dbcfff]/90">Personal Income Tax</p>
					</div>

					{/* ================= FORM  */}
					<div className="space-y-2">
						<CurrencyInput
							id="income"
							label="Gross Annual Income"
							value={income}
							onChange={setIncome}
						/>

						<CurrencyInput
							id="rent"
							label="Annual Rent"
							value={rent}
							onChange={setRent}
						/>

						<CurrencyInput
							id="other"
							label="Other Deductions"
							value={other}
							onChange={setOther}
						/>

						{/* ================= TOGGLES ================= */}
						<div className="space-y-3 text-[#dbcfff]/90">
							<div className="flex justify-between items-center bg-black p-3 rounded-lg">
								<span className="lg:hidden text-sm">NHIS (5%)</span>
								<span className="hidden lg:block text-sm">
									Include National Housing Fund (5%)
								</span>

								<input
									type="checkbox"
									className="appearance-none w-4 h-4 border border-[#01bdfc]/50 rounded-full checked:bg-[#f4ab17] cursor-pointer"
									checked={nhis}
									onChange={(e) => setNhis(e.target.checked)}
								/>
							</div>

							<div className="flex justify-between items-center bg-black p-3 rounded-lg">
								<span className="lg:hidden text-sm">NHF (2.5%)</span>
								<span className="hidden lg:block text-sm">
									Include National Health Insurance Scheme (2.5%)
								</span>

								<input
									type="checkbox"
									className="appearance-none w-4 h-4 border border-[#01bdfc]/50 rounded-full checked:bg-[#f4ab17] cursor-pointer"
									checked={nhf}
									onChange={(e) => setNhf(e.target.checked)}
								/>
							</div>

							<div className="bg-black p-3 rounded-lg">
								<p className="text-sm">Pension Contribution (8%)</p>
							</div>
						</div>

						{/* ================= CALCULATE BUTTON ================= */}
						<CalculateTaxButton
							onClick={handleCalculate}
							enabled={isValid}
							loading={false}
						/>
					</div>
				</div>

				{/* ================= RIGHT (RESULTS) ================= */}
				<motion.div layout className="relative rounded-2xl p-6 bg-black">
					<h3 className="text-lg font-semibold mb-6">Live Result</h3>

					<div className="space-y-4 text-sm">
						<ResultRow label="Pension (8%)" value={result.pension} />
						<ResultRow label="NHIS" value={result.nhisDeduction} />
						<ResultRow label="NHF" value={result.nhfDeduction} />
						<ResultRow label="Rent Relief" value={result.rentRelief} />
						<ResultRow
							label="Total Deductions"
							value={result.totalDeductions}
							highlight
						/>

						<hr className="border-[#01bdfc]" />

						<ResultRow label="Taxable Income" value={result.taxableIncome} />
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

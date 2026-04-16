// ====================================
// src/pages/taxPages/Freelancer.tsx
// ==================================== FREELANCER TAX CALCULATION/RESULT LAYOUT

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TaxOptionsButton from "../../components/ui/buttons/TaxOptionsButton";
import CalculateTaxButton from "../../components/ui/buttons/CalculateTaxButton";
import CurrencyInput from "../../components/ui/inputs/CurrencyInput";
import { parseNumber } from "../../utils/numberInput";

// ==================================== FUNCTION
export default function Freelancer() {
	// ================= STATE
	const [income, setIncome] = useState("");
	const [pension, setPensionContribution] = useState("");
	const [includeExpenses, setIncludeExpenses] = useState(false);
	const [totalBusinessExpenses, setTotalBusinessExpenses] = useState("");

	// ================= DERIVED NUMBERS
	const incomeNum = useMemo(() => parseNumber(income), [income]);
	const pensionNum = useMemo(() => parseNumber(pension), [pension]);
	const expensesNum = useMemo(
		() => parseNumber(totalBusinessExpenses),
		[totalBusinessExpenses],
	);

	// ================= VALIDATION
	const isValid = incomeNum > 0;

	// ================= SIMPLE LIVE CALC
	const result = useMemo(() => {
		const expenses = includeExpenses ? expensesNum : 0;

		const totalDeductions = pensionNum + expenses;

		const taxableIncome = Math.max(incomeNum - totalDeductions, 0);
		const estimatedTax = taxableIncome * 0.1;

		return {
			pension: pensionNum,
			expenses,
			totalDeductions,
			taxableIncome,
			estimatedTax,
		};
	}, [incomeNum, pensionNum, expensesNum, includeExpenses]);

	// ================= HANDLER
	const handleCalculate = () => {
		console.log("Calculation Result:", result);
	};

	return (
		<div className="min-h-screen bg-black py-4">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				className="w-full max-w-7xl mx-auto px-4"
			>
				{/* ================= HEADER TAX OPTIONS BUTTON ================= */}
				<div className="text-[1.2rem] md:text-[1.5rem] flex justify-center py-1">
					<TaxOptionsButton className="px-[2rem] py-[0.3rem]">
						Tax Options
					</TaxOptionsButton>
				</div>

				{/* ================= MAIN GRID ================= */}
				<div className="grid lg:grid-cols-2 gap-6">
					{/* LEFT */}{" "}
					{/* ================= LEFT (TAX CALCULATOR FORM) ======================= */}
					<div className="relative rounded-2xl p-6 bg-gradient-to-b from-black via-[#000aff] to-black">
						{/* ================= HEADER  */}
						<div className="flex flex-col items-center text-[#01bdfc] mb-6">
							<h2 className="text-xl font-semibold">FREELANCER</h2>
							<p className="text-xs text-[#dbcfff]/90">Self-employed tax</p>
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
								id="pension"
								label="Pension Contribution"
								value={pension}
								onChange={setPensionContribution}
							/>

							{/* ================= TOGGLE ================= */}
							<div className="space-y-3 text-[#dbcfff]/90">
								<div className="flex justify-between items-center bg-black p-3 rounded-lg">
									<span className="text-sm">Include Business Expenses</span>

									<input
										type="checkbox"
										className="appearance-none w-4 h-4 border border-[#01bdfc]/50 rounded-full checked:bg-[#f4ab17] cursor-pointer"
										checked={includeExpenses}
										onChange={(e) => setIncludeExpenses(e.target.checked)}
									/>
								</div>

								{includeExpenses && (
									<CurrencyInput
										id="expenses"
										label="Total Business Expenses"
										value={totalBusinessExpenses}
										onChange={setTotalBusinessExpenses}
									/>
								)}
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
							<ResultRow label="Pension" value={result.pension} />
							<ResultRow label="Expenses" value={result.expenses} />
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
			</motion.div>
		</div>
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

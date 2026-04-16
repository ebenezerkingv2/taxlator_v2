// ====================================
// src/pages/taxPages/VAT.tsx
// ====================================

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TaxOptionsButton from "../../components/ui/buttons/TaxOptionsButton";
import CalculateTaxButton from "../../components/ui/buttons/CalculateTaxButton";
import CurrencyInput from "../../components/ui/inputs/CurrencyInput";
import { parseNumber } from "../../utils/numberInput";

// ==================================== TYPES
type CalculationType = "add" | "remove";
type TransactionType = "Domestic" | "Export" | "Digital" | "Exempt";

// ==================================== FUNCTION
export default function VAT() {
	// ================= STATE
	const [amount, setAmount] = useState("");
	const [calculationType, setCalculationType] =
		useState<CalculationType>("add");
	const [transactionType, setTransactionType] =
		useState<TransactionType>("Domestic");

	// ================= DERIVED
	const amountNum = useMemo(() => parseNumber(amount), [amount]);

	const vatRate = useMemo(() => {
		if (transactionType === "Domestic") return 0.075;
		if (transactionType === "Digital") return 0.075;
		return 0;
	}, [transactionType]);

	// ================= VALIDATION
	const isValid = amountNum > 0;

	// ================= CALCULATION
	const result = useMemo(() => {
		let vatAmount = 0;
		let total = amountNum;

		if (calculationType === "add") {
			vatAmount = amountNum * vatRate;
			total = amountNum + vatAmount;
		} else {
			vatAmount = amountNum - amountNum / (1 + vatRate);
			total = amountNum - vatAmount;
		}

		return {
			vatRate,
			vatAmount,
			total,
		};
	}, [amountNum, vatRate, calculationType]);

	// ================= HANDLER
	const handleCalculate = () => {
		console.log("VAT Result:", result);
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
					{/* ================= LEFT (TAX CALCULATOR FORM) ======================= */}
					<div className="relative rounded-2xl p-6 bg-gradient-to-b from-black via-[#000aff] to-black">
						<div className="flex flex-col items-center text-[#01bdfc] mb-6">
							<h2 className="text-xl font-semibold">VAT</h2>
							<p className="text-xs text-[#dbcfff]/90">Value Added Tax</p>
						</div>

						{/* ================= FORM  */}
						<div className="space-y-4">
							<CurrencyInput
								id="amount"
								label="Transaction Amount"
								value={amount}
								onChange={setAmount}
							/>

							{/* ================= ADD / REMOVE  */}
							<div className="grid grid-cols-2 gap-3">
								<button
									onClick={() => setCalculationType("add")}
									className={`rounded-lg py-2 text-sm font-semibold cursor-pointer ${
										calculationType === "add"
											? "border border-[#f4ab17] text-[#f4ab17]"
											: "bg-black text-[#01bdfc] border border-[#01bdfc]/50"
									}`}
								>
									+ Add VAT
								</button>

								<button
									onClick={() => setCalculationType("remove")}
									className={`rounded-lg py-2 text-sm font-semibold cursor-pointer ${
										calculationType === "remove"
											? "border border-[#f4ab17] text-[#f4ab17]"
											: "bg-black text-[#01bdfc] border border-[#01bdfc]/50"
									}`}
								>
									- Remove VAT
								</button>
							</div>

							{/* ================= TRANSACTION TYPE   */}
							<div className="space-y-3">
								{[
									{ key: "Domestic", label: "Domestic (7.5%)" },
									{ key: "Digital", label: "Digital (7.5%)" },
									{ key: "Export", label: "Export (0%)" },
									{ key: "Exempt", label: "Exempt (0%)" },
								].map((item) => {
									const active = transactionType === item.key;

									return (
										<button
											key={item.key}
											onClick={() =>
												setTransactionType(item.key as TransactionType)
											}
											className={`w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm cursor-pointer ${
												active
													? "border border-[#f4ab17] text-[#f4ab17]"
													: "bg-black border border-[#01bdfc]/20 text-[#dbcfff]/80"
											}`}
										>
											<span>{item.label}</span>
											<span>{active ? "✔" : ""}</span>
										</button>
									);
								})}
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
							<ResultRow label="VAT Rate (%)" value={result.vatRate * 100} />
							<ResultRow label="VAT Amount" value={result.vatAmount} />

							<hr className="border-[#01bdfc]" />

							<ResultRow label="Total" value={result.total} highlight big />
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

// ==================================== RESULT ROW
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

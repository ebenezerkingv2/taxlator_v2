// =====================================
// src/components/dashboard/dashApi/historyApi.ts
// ===================================== HISTORY API DATA

import type { HistoryItem } from "../types";

// ================= MOCK FETCH =================
export async function fetchHistory(): Promise<HistoryItem[]> {
	// simulate API delay
	await new Promise((res) => setTimeout(res, 500));

	return [
		{
			id: "1",
			type: "PAYE / PIT",
			label: "March Salary",
			date: "2026-04-12",
			income: 850000,
			tax: 85000,
			net: 765000,
		},
		{
			id: "2",
			type: "VAT",
			label: "Invoice #014",
			date: "2026-04-10",
			income: 600000,
			tax: 45000,
			net: 555000,
		},
		{
			id: "3",
			type: "CIT",
			label: "Q1 Filing",
			date: "2026-04-08",
			income: 1200000,
			tax: 240000,
			net: 960000,
		},
	];
}

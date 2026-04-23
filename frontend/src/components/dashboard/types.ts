// =====================================
// src/components/dashboard/types.ts
// ===================================== DASHBOARD TYPES

// ===================================== HISTORY TAX TYPE
export type TaxType = "PAYE / PIT" | "VAT" | "CIT" | "FREELANCER";

// ===================================== HISTORY ITEM TYPE
export type HistoryItem = {
	id: string;
	type: TaxType;
	label: string;
	date: string;
	income: number;
	tax: number;
	net: number;
};

// =====================================
// src/components/dashboard/taxType.config.ts
// ===================================== TAX TYPE CONFIG

import type { TaxType } from "./types";

// ===================================== FUNCTION
export type TaxVariant = "ALL" | "PIT" | "VAT" | "CIT" | "FREELANCER";

// ===================================== FUNCTION
export const taxTypeConfig: Record<
	TaxType | "ALL",
	{ label: string; variant: TaxVariant }
> = {
	ALL: { label: "ALL", variant: "ALL" },

	"PAYE / PIT": { label: "PAYE / PIT", variant: "PIT" },

	VAT: { label: "VAT", variant: "VAT" },

	CIT: { label: "CIT", variant: "CIT" },

	FREELANCER: { label: "FREELANCER", variant: "FREELANCER" },
};

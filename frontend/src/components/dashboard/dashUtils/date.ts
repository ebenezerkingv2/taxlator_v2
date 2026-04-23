// =====================================
// src/components/dashboard/utils.ts
// =====================================

// ===================================== DATE FORMATTER
export function formatDate(date: string) {
	return new Intl.DateTimeFormat("en-NG", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	}).format(new Date(date));
}

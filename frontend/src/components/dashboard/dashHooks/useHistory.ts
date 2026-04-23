// =====================================
// src/components/dashboard/dashHooks/useHistory.ts
// ===================================== STATE AND FILTERING LOGIC

import { useEffect, useState, useCallback } from "react";
import { fetchHistory } from "../dashApi/historyApi";
import type { HistoryItem, TaxType } from "../types";

// ===================================== DATA
type FilterType = "ALL" | TaxType;

export function useHistory() {
	const [history, setHistory] = useState<HistoryItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState<FilterType>("ALL");

	const loadHistory = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fetchHistory();
			setHistory(data);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadHistory();
	}, [loadHistory]);

	const filtered =
		filter === "ALL" ? history : history.filter((item) => item.type === filter);
	return {
		history: filtered,
		loading,
		filter,
		setFilter,
		refresh: loadHistory,
	};
}

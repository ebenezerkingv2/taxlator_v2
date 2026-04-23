// =====================================
// src/components/dashboard/dashComponents/cards/HistoryCard.tsx
// ===================================== HISTORY CARD COMPONENT

import CardFrame from "../../../ui/frames/CardFrame";
import DashboradCardFrame from "../frames/DashboardCardFrame";
import type { HistoryItem } from "../../types";
import { formatDate } from "../../dashUtils/date";
import TaxBadge from "../TaxBadge";

// ===================================== DATA
type HistoryCardProps = {
	item: HistoryItem;
};

// ===================================== FUNCTION
export default function HistoryCard({ item }: HistoryCardProps) {
	return (
		<DashboradCardFrame id="historyCard">
			<CardFrame className="p-4">
				<div className="flex justify-between items-start">
					{/* ================= LEFT SIDE ================= */}
					<div className="flex flex-col gap-2 text-lg text-bold text-left">
						<h2 className="text-[#f4ab17]">{item.label}</h2>

						<p className="text-[#dbcfff] text-sm">{formatDate(item.date)}</p>

						{/* ================= TAX TYPE ================= */}
						<p className="text-[#dbcfff]/90 text-sm">
							Type:
							<TaxBadge type={item.type} className="ml-3" />
						</p>
					</div>

					{/* ================= RIGHT SIDE ================= */}
					<div className="flex flex-col gap-2 text-sm text-bold text-right">
						<p>
							Income:
							<span className="text-[#01bdfc]">
								₦{item.income.toLocaleString()}
							</span>
						</p>

						<p>
							Tax:
							<span className="text-red-400 ml-2">
								₦{item.tax.toLocaleString()}
							</span>
						</p>

						<p>
							Net:
							<span className="text-green-400 ml-2">
								₦{item.net.toLocaleString()}
							</span>
						</p>
					</div>
				</div>
			</CardFrame>
		</DashboradCardFrame>
	);
}

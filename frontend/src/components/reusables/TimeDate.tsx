// =====================================
// TimeDate Reusable Component
// ===================================== TIME AND DATE COMPONENT

import { useEffect, useState } from "react";

// =====================================
interface TimeDateProps {
	className?: string;
}

const TimeDate = ({ className = "" }: TimeDateProps) => {
	const [gmtTime, setGmtTime] = useState<string>("");
	const [gmtDate, setGmtDate] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();

			const time = now.toLocaleString("en-GB", {
				timeZone: "UTC",
				timeStyle: "medium",
			});

			const date = now.toLocaleString("en-GB", {
				timeZone: "UTC",
				dateStyle: "full",
			});

			setGmtTime(time + " GMT");
			setGmtDate(date);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={`time-date__parent flex flex-col leading-none text-[0.9rem] font-bold italic mt-[0.3rem] ${className}`}
		>
			<p className="m-1">{gmtTime}</p>
			<p className="m-1">{gmtDate}</p>
		</div>
	);
};

export default TimeDate;

import { useEffect, useState } from "react";

interface TodayDateProps {
	fallback: string;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
});

const TodayDate = ({ fallback }: TodayDateProps) => {
	const [label, setLabel] = useState(fallback);

	useEffect(() => {
		setLabel(dateFormatter.format(new Date()));
	}, []);

	return <span>{label}</span>;
};

export default TodayDate;

import { useState, useEffect, useRef } from "react";

function Clock() {
	const [date, setdate] = useState(new Date());
	const intervalRef = useRef();

	const tick = () => {
		setdate(new Date());
	};

	useEffect(() => {
		intervalRef.current = setInterval(tick, 1000);

		return () => {
			clearInterval(intervalRef.current);
		};
	});

	return (
		<div>
			<p>Time: {date.toLocaleTimeString()}</p>
			<button
				type="button"
				onClick={() => clearInterval(intervalRef.current)}
			>
				Stop the clock
			</button>
		</div>
	);
}

export default Clock;

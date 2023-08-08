import { useState, useEffect } from "react";

function MyComponent() {
	const [count, setcount] = useState(0);
	const [date, setdate] = useState(new Date());

	const tick = () => {
		console.log("tick is running");
		setdate(new Date());
	};

	useEffect(() => {
		console.log("useeffect rendering");
		document.title = `Clicked ${count} times`;
	}, [count]);

	useEffect(() => {
		console.log("timer running");
		const interval = setInterval(tick, 1000);

		// component will unmount
		// clear the timer
		return () => {
			clearInterval(interval);
		};
	}, []);

	const onClickHandler = () => {
		setcount((prevState) => prevState + 1);
	};

	return (
		<div>
			<p>Time: {date.toLocaleTimeString()}</p>
			<button type="button" onClick={onClickHandler}>
				Click
			</button>
		</div>
	);
}

export default MyComponent;

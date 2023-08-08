// import React from "react";
import { useState } from "react";

function Todo() {
	const [Todo, setTodo] = useState("");
	const [Warning, setWarning] = useState(null);

	const changeHandler = (e) => {
		const updatedInput = e.target.value;
		const updatedWarning = updatedInput.includes(".js")
			? "learn js deeply"
			: null;

		setTodo(updatedInput);
		setWarning(updatedWarning);
	};

	return (
		<div>
			<p>{Todo}</p>
			<textarea
				placeholder="Enter your message"
				value={Todo}
				onChange={changeHandler}
			/>
			<h1>{Warning || "Great choice"}</h1>
		</div>
	);
}

export default Todo;

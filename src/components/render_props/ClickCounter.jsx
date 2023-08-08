function ClickCounter({ count, increamentCounter }) {
	return (
		<div>
			<button type="button" onClick={increamentCounter}>
				clicked count {count} times
			</button>
		</div>
	);
}

export default ClickCounter;

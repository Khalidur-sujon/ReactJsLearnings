import withCounter from "../HOC/withCounter";

const ClickCounter = (props) => {
	const { count, incrementHandler } = props;
	return (
		<div>
			<button type="button" onClick={incrementHandler}>
				Hover {count} time
			</button>
		</div>
	);
};

export default withCounter(ClickCounter);

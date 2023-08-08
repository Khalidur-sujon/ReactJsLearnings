import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
	const { count, incrementHandler } = props;
	return (
		<div>
			<h1 onMouseOver={incrementHandler}>Hover {count} time</h1>
		</div>
	);
};

export default withCounter(HoverCounter);

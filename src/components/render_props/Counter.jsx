import React from "react";

class Counter extends React.Component {
	state = {
		count: 0,
	};
	increamentCounter = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		const { count } = this.state;
		const { children } = this.props;
		return children(count, this.increamentCounter);
	}
}

export default Counter;

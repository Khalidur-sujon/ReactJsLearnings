/* eslint-disable react/prop-types */
// import
import React from "react";
import Button from "./Button";
// function Clock({ locale }) {
// 	return (
// 		<h1 className="heading">
// 			<span className="text">
// 				Hello {new Date().toLocaleString(locale)}
// 			</span>
// 		</h1>
// 	);
// }

// using class component
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date(), locale: "bn-BD" };
	}

	// state = { date: new Date() };

	componentDidMount() {
		this.clockTimer = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.clockTimer);
	}

	handleClick = (locale) => {
		this.setState({
			locale,
		});
	};

	tick() {
		// update previous state
		this.setState({
			date: new Date(), // this is updated state
		});
	}

	render() {
		const { date, locale } = this.state;

		return (
			<div>
				<h1 className="heading">
					<span className="text">
						Hello
						{date.toLocaleTimeString(locale)}
					</span>
				</h1>
				{locale === "bn-BD" ? (
					<Button change={this.handleClick} locale="en-US" />
				) : (
					<Button change={this.handleClick} locale="bn-BD" />
				)}
			</div>
		);
	}
}

export default Clock;

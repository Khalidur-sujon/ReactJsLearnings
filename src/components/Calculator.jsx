import BoilingVerdict from "./BoilingVerdict";
import { convert, toCelcius, toFarehiet } from "../lib/converter";
import TemperatureInput from "./TemperatureInput";
import React from "react";

export default class Calculator extends React.Component {
	state = {
		temperature: "",
		scale: "c",
	};

	handleChange = (e, scale) => {
		this.setState({
			temperature: e.target.value,
			scale,
		});
	};
	render() {
		const { temperature, scale } = this.state;

		const celcius =
			scale === "f" ? convert(temperature, toCelcius) : temperature;
		const farenhiet =
			scale === "c" ? convert(temperature, toFarehiet) : temperature;

		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celcius}
					onTempChangeHandler={this.handleChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={farenhiet}
					onTempChangeHandler={this.handleChange}
				/>
				<BoilingVerdict celcius={temperature} />
			</div>
		);
	}
}

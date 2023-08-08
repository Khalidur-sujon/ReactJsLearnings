import React from "react";

class Button extends React.Component {
	// shouldComponentUpdate(nextProps) {
	// 	const { change: currentChange } = this.props;
	// 	const { change: nextChange } = nextProps;

	// 	if (currentChange === nextChange) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }
	render() {
		const { change, locale } = this.props;
		return (
			<button onClick={() => change(locale)}>
				{locale === "en-US" ? "InEnglish" : "InBangla"}
			</button>
		);
	}
}

// export
export default Button;

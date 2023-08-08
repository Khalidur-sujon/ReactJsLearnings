import React from "react";

class Bracket extends React.Component {
	addBracket = (text) => `[ - ${text} - ]`;
	render() {
		return this.props.children({ addBracket: this.addBracket });
	}
}
export default Bracket;

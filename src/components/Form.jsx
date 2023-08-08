import React from "react";

export default class Form extends React.Component {
	state = {
		title: "jss",
		text: "textarea",
		library: "React",
		isAwesome: true,
	};

	onChangeHandler = (e) => {
		if (e.target.type === "text") {
			this.setState({
				title: e.target.value,
			});
		} else if (e.target.type === "textarea") {
			this.setState({
				text: e.target.value,
			});
		} else if (e.target.type === "select-one") {
			this.setState({
				library: e.target.value,
			});
		} else if (e.target.type === "checkbox") {
			this.setState({
				isAwesome: e.target.checked,
			});
		}
	};

	onSubmitHandler = (e) => {
		e.preventDefault();
		const { title, text, library, isAwesome } = this.state;
		console.log(`${title}-${text}-${library}-${isAwesome}`);
	};

	render() {
		const { title, text, library, isAwesome } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitHandler}>
					<input
						type="text"
						placeholder="Enter title"
						value={title}
						onChange={this.onChangeHandler}
					/>
					<br />
					<br />
					<textarea
						placeholder="Enter your message"
						value={text}
						onChange={this.onChangeHandler}
					/>
					<br />
					<br />
					<select value={library} onChange={this.onChangeHandler}>
						<option value="React">React</option>
						<option value="Angular">Angular</option>
					</select>
					<br />
					<br />
					<input
						type="checkbox"
						checked={isAwesome}
						onChange={this.onChangeHandler}
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

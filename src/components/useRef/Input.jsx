import React from "react";

function Input({ type, placeholder }, ref) {
	return (
		<div>
			<input ref={ref} type={type} placeholder={placeholder} />
		</div>
	);
}

const forwaredComponent = React.forwardRef(Input);

export default forwaredComponent;

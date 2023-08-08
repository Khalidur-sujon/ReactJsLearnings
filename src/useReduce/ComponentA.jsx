import { counterContext } from "../App";
import { useContext } from "react";

function ComponentA() {
	const useCounterContext = useContext(counterContext);
	return (
		<div>
			<button
				type="button"
				onClick={() => useCounterContext.dispatcher("increament")}
			>
				Increament
			</button>
			<button
				type="button"
				onClick={() => useCounterContext.dispatcher("decreament")}
			>
				Decreament
			</button>
		</div>
	);
}

export default ComponentA;

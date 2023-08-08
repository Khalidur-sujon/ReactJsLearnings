const scaleName = {
	c: "Celcius",
	f: "Farenheit",
};
export default function TemperatureInput({
	temperature,
	scale,
	onTempChangeHandler,
}) {
	return (
		<fieldset>
			<legend>Enter temperature in {scaleName[scale]}</legend>
			<input
				type="text"
				value={temperature}
				onChange={(e) => onTempChangeHandler(e, scale)}
			/>
		</fieldset>
	);
}

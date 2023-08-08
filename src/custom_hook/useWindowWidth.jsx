import { useState, useEffect, useCallback } from "react";

const useWindowWidth = (screenSize) => {
	const [onSmallScreen, setonSmallScreen] = useState(false);

	const setWindow = useCallback(() => {
		setonSmallScreen(window.innerWidth < screenSize);
	}, [screenSize]);

	useEffect(() => {
		setWindow();
		window.addEventListener("resize", setWindow);

		// clean up
		return () => window.removeEventListener("resize", setWindow);
	}, [setWindow]);

	return onSmallScreen;
};

export default useWindowWidth;

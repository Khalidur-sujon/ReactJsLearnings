// import React from "react";
import useWindowWidth from "./useWindowWidth";

export default function LayoutComponent() {
	const onSmallScreen = useWindowWidth(800);
	return <div>This is screen is {onSmallScreen ? "Small" : "Large"}</div>;
}

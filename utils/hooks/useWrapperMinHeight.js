import { useEffect, useState } from "react";

const useWrapperMinHeight = () => {
	const [wrapperMinHeight, setWrapperMinHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const screenHeight = window.innerHeight;
			const headerHeight = document.querySelector("header").offsetHeight;
			const footerHeight = document.querySelector("footer").offsetHeight;
			const calculatedHeight = screenHeight - headerHeight - footerHeight;
			setWrapperMinHeight(calculatedHeight);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return wrapperMinHeight;
};

export default useWrapperMinHeight;

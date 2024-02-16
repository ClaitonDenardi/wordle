import { useContext, useEffect, useState } from "react";
import { AppContext } from "../appContext";

export const useTimer = () => {
	const { timing } = useContext(AppContext);

	const [timeRemaining, setTimeRemaining] = useState<number>(timing);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (timeRemaining > 0) setTimeRemaining(time => time - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeRemaining]);

	return { timeRemaining }
}
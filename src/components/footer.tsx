import { useContext } from "react";
import { AppContext } from "../appContext";

function Footer() {
	const { offline, setOffline } = useContext(AppContext);

	return (
		<footer>
			<button
				onClick={() => setOffline((prev) => !prev)}
				title="No modo online as palavras são recuperadas de uma API"
			>
				{`Jogar ${offline ? "online" : "offline"}`}
			</button>
		</footer>
	)
}

export default Footer

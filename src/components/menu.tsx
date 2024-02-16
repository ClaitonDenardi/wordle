import { useContext } from "react";
import { AppContext } from "../appContext";
import { timingOptions } from "../utils/timingOptions";

function Menu() {
	const { timing, setTiming, setIngame } = useContext(AppContext);

	return (
		<div className="container">
			<form
				className="container"
				onSubmit={(e) => { e.preventDefault(); setIngame(true); }}
			>
				<br />
				<fieldset>
					<legend>Selecione o tempo de jogo</legend>
					{timingOptions.map((option) => (
						<label key={option.time} htmlFor={option.title}>
							<input
								id={option.title}
								type="radio"
								value={option.time}
								checked={timing === option.time}
								onChange={() => setTiming(option.time)}
							/>
							{option.title}
						</label>
					))}
					<br />
					<span>Quanto maior o tempo, mais palavras devem ser adivinhadas por cada participante.</span>
				</fieldset>
				<button type="submit">
					JOGAR
				</button>
			</form>
		</div>
	)
}

export default Menu
